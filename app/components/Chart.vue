<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  data(){
    return {
      chartdata: {
          labels: ['学習時間'],
          datasets: [
              {
              label: ['学習時間'],
              backgroundColor: ['rgba(54, 162, 235, 0.2)'],
              borderColor: ['rgba(54, 162, 235, 1)'],
              borderWidth: [1],
              data: [500, 0]
              }
          ]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
  responsive: true,
}
</script>

<style scoped>

</style>
