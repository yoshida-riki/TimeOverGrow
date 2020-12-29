<script>
import { Bar } from 'vue-chartjs'


export default {
  extends: Bar,
  // props: ['totall_time'],
  data(){
    return {
      chartdata: {
        labels: ['学習時間'],
        datasets: [
          {
            label: ['学習時間'],
            data: [],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)'],
            borderWidth: [1],
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // グラフの縦横比を固定するか
        scales: {
          // x軸に関して
          xAxes: [{
            // ラベルについて
            scaleLabel: {
              display: true,
              labelString: ''
            }
          }],
          // y軸に関して
          yAxes: [{
            // 目盛りについて
            ticks: {
              beginAtZero: true, // 0からスタートするか
              max: 500,
              stepSize: 50, // 目盛りの間隔
              callback: function (label, index, labels) {
                return label + ' h';
              }
            }
          }],
        },
        // hoverした時に出てくる表示
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return tooltipItem.yLabel + ' h'; // ツールチップに'点'を付ける
            }
          }
        }
      }
    }
  },

  // 変更点
  // props: ['chartdata', 'options'],

  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
  responsive: true,
}
</script>

<style scoped>

</style>
