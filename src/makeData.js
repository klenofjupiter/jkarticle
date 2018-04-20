import * as d3 from 'd3';
//dictionary of verbs and nouns to colors
let dictionary = {
 'empty': '#565655',
 '2.2' : '#FCC528',
  'B' : '#64B5F6',
  'A': '#9575CD', 
  '3.1': '#8BBA25',
  '1.2': '#D8223F', 
  'E':  '#FFB74D',
 }

const makeData = (data, clicker) => {

    let cl = []
    for (let field in data.cl){
     cl.push([field, data.cl[field]])
    }

    let clGroup = d3.select('#viz').append('g')

    let companyLocus = clGroup.selectAll('rect .bars')
      .data(cl)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25
         return height +5
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!cl[i][1]) return dictionary['empty']
        return dictionary[cl[i][1]]
      })
      .attr('class', 'companyLocus')
      
     let clHeader = clGroup.append('text')
      					.attr('x', '70')
      					.attr('y', '0')
      					.attr('stroke', 'black')
      					.text('Company Locus')

      let clLabel = clGroup.selectAll('.clLabel')
        .data(cl)
        .enter()
        .append('svg:text')
        .attr('x', '120')
        .attr('y', (d, i) => i*25 -5 +25 +5)
        .attr('stroke', 'black')
        .text((d, i) => cl[i][1] )

    
    let f1 = []
    for (let field in data.f1){
      f1.push([field, data.f1[field]])
    }

    let f1Group = clGroup.append('g')

    let firstInt = f1Group.selectAll('rect .bars')
      .data(f1)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25 + 120
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!f1[i][1]) return dictionary['empty']
        return dictionary[f1[i][1]]
      })
      .attr('class', 'firstInt')

      let f1Label = clGroup.selectAll('.f1Label')
        .data(f1)
        .enter()
        .append('svg:text')
        .attr('x', '120')
        .attr('y', (d, i) => i*25 + (120-5) + 25)
        .attr('stroke', 'black')
        .text((d, i) => f1[i][1] )

    let f2 = []
    for (let field in data.f2){
      f2.push([field, data.f2[field]])
    }

    let f2Group = f1Group.append('g')

    let secondInt = f2Group.selectAll('rect .bars')
      .data(f2)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25 + 240
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!f2[i][1]) return dictionary['empty']
        return dictionary[f2[i][1]]      

      })

      let f2Label = f2Group.selectAll('.f2Label')
        .data(f2)
        .enter()
        .append('svg:text')
        .attr('x', '120')
        .attr('y', (d, i) => i*25 + (240-5) + 25)
        .attr('stroke', 'black')
        .text((d, i) => f2[i][1] )

    let cust = []
    for (let field in data.cust){
      cust.push([field, data.cust[field]])
    }
    let custGroup = f2Group.append('g')
    let custBars = custGroup.selectAll('rect .bars')
      .data(cust)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25 + 360
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!cust[i][1]) return dictionary['empty']
        return dictionary[cust[i][1]]
      })
    let custLabel = custGroup.selectAll('.custLabel')
        .data(cust)
        .enter()
        .append('svg:text')
        .attr('x', '120')
        .attr('y', (d, i) => i*25 + (360-5) + 25)
        .attr('stroke', 'black')
        .text((d, i) => cust[i][1] )

    let cust2 = []
    for (let field in data.cust2){
      cust2.push([field, data.cust2[field]])
    }

    let cust2Group = custGroup.append('g')
    let cust2Bars = cust2Group.selectAll('rect .bars')
      .data(cust2)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25 + 480 
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!cust2[i][1]) return dictionary['empty']
        return dictionary[cust2[i][1]]
      })
    let cust2Label = cust2Group.selectAll('.custLabel')
        .data(cust2)
        .enter()
        .append('svg:text')
        .attr('x', '120')
        .attr('y', (d, i) => i*25 + (480-5) + 25)
        .attr('stroke', 'black')
        .text((d, i) => cust2[i][1] )


} 
export default makeData;