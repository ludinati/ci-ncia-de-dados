const data = [
    {
      x: 'nomeDasRedes',
      y: quantidadeDeUsuarios,
      type: 'bar',
      marker: {
        color: getComputedStyle(document.body).getPropertyValue('--primary-color')
      }
    }
  ]
  const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  
  export {getCSS}
  import { getCSS } from "./common.js";
  const layout = {
    plot_bgcolor: getCSS('--bg-color')
}
Plotly.newPlot(grafico, data, layout)
