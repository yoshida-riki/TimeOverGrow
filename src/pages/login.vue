<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" sm="8" md="6">
				<h2 class="text-center subtitle-1 font-weight-bold mb-2">
					メールアドレスでログイン
				</h2>
				<v-row>
					<v-col>
						<v-tabs
							v-model="tab"
							background-color="transparent"
							color="blue accent-2"
							grow
							class="mb-3"
						>
							<v-tab to="/login">ログイン</v-tab>
							<v-tab to="/register">アカウント登録</v-tab>
						</v-tabs>

						<v-row>
							<v-col sm="12">
								<v-card flat>
									<v-card-text class="pa-0">
										<v-form
											ref="login_form"
											v-model="login_valid"
											lazy-validation
										>
											<v-text-field
												v-model="login_email"
												label="メールアドレス"
												required
											/>

											<v-text-field
												v-model="login_password"
												label="パスワード"
												required
												:append-icon="
													show_loginpassword
														? 'mdi-eye'
														: 'mdi-eye-off'
												"
												:type="
													show_loginpassword
														? 'text'
														: 'password'
												"
												@click:append="
													show_loginpassword = !show_loginpassword
												"
											/>

											<v-alert
												v-if="loginErrorMsg"
												dense
												text
												type="error"
											>
												{{ loginErrorMsg }}
											</v-alert>

											<v-btn
												:disabled="!login_valid"
												color="blue darken-3"
												class="my-4 white--text"
												@click="email_login()"
											>
												ログイン
											</v-btn>
										</v-form>
									</v-card-text>
								</v-card>
							</v-col>
						</v-row>
						<v-divider class="my-8" />
						<v-row>
							<v-col sm="12">
								<h2
									class="text-center subtitle-1 font-weight-bold mb-2"
								>
									その他のアカウントでログイン
								</h2>
							</v-col>
						</v-row>
						<v-alert
							v-if="socialLoginErrorMsg"
							dense
							text
							type="error"
							dismissible
						>
							{{ socialLoginErrorMsg }}
						</v-alert>
						<SocialLogin />
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import axios from '../axios-for-auth'
import SocialLogin from '../components/SocialLogin.vue'
import { auth } from '../plugins/firebase'


export default {
  layout: 'signin',
  components: {
    SocialLogin
  },
  data: function() {
    return {
      tab: null,
      login_valid: true,
      login_email: '',
      login_password: '',
      show_loginpassword: false,
      loginErrorMsg: '',
      socialLoginErrorMsg: ''
    }
  },
  methods: {
    email_login: function(err) {
      this.$store
        .dispatch('signInWithEmail', {
          email: this.login_email,
          password: this.login_password
        })
        .then(() => {
          this.login_email = ''
          this.login_password = ''
          this.$router.push({
            name: 'index'
          })
        })
        .catch((err) => {
          if (err.code === 'auth/user-disabled') {
            this.loginErrorMsg =
							'このアカウントはロックされています。'
          } else {
            this.loginErrorMsg =
							'メールアドレスまたはパスワードが間違っています。'
          }
        })
    }
    // login() {　//axiosでログイン用のインスタンスにアクセスするメソッドを定義
    //   axios.post( //エンドポイントのURLがログイン用のものを使う
    //     '/accounts:signUp?key=AIzaSyDmGnMT66bkyCcGrTYNOWTczIATGwTydmk',
    //     {
    //       email: this.login_email,　//送る情報は新規登録と同じ
    //       password: this.login_password,
    //       returnSecureToken: true
    //     }
    // 	)
    // 	.then((response) => {
    // 		this.login_email = ''
    // 		this.login_password = ''
    // 		this.$store.commit('updateIdToken', response.data.idToken) //追記
    // 		this.$router.push({
    // 			name: 'index'
    // 		})
    //     console.log(response); //返ってきたレスポンスをログに表示
    // 	})
    // 	.catch((err) => {
    // 		if (err.code === 'auth/user-disabled') {
    // 			this.loginErrorMsg =
    // 				'このアカウントはロックされています。'
    // 		} else {
    // 			this.loginErrorMsg =
    // 				'メールアドレスまたはパスワードが間違っています。'
    // 		}
    // 	});
    //   this.email = "";
    //   this.password = "";
    // }
  }
}
</script>
