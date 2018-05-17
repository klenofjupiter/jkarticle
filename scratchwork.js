// 
     // const percentB2B = (totalb2b / totalCompanies) * 10
    // const percentB2C = (totalb2c / totalCompanies) * 10

    // const percentScale = d3.scaleLinear().range([0, 3000]).domain([0, 100])
// b2b graph
//     const arc = d3.arc()
//                   .outerRadius(percentScale(percentB2B)) 
//                   .innerRadius(0)

//     const labelArc = d3.arc()
//                        .outerRadius(percentScale(percentB2B) - 60)
//                        .innerRadius(percentScale(percentB2B)- 50)

//     const pie = d3.pie().value((d) => d[4])
   
//    //append g elements for arcs
//     const g = plot.selectAll('.arc-1')
//                   .data(pie(b2b))
//                   .enter()
//                   .append('g')
//                   .attr('class', 'arc-1')
//                   .attr('transform', 'translate(400, 400)')

//     //append path of arc
//     g.append('path')
//      .attr('d', arc)
//      .style('fill', (d, i) => reds(i))

//     //append label
//     g.append('text')
//      .attr('transform', (d) => 'translate(' + labelArc.centroid(d) + ")" )
//      .attr('dy', '.35em')
//      .text((d) => { return d.data[2]})
//      .attr('fill', 'white')

//      // chart label

//      g.append('text')
//       .text((d) => "Businesses in "+ d.data[0])
//       .style('fill', 'gray')
//       .style('font-size', '1.25em')
//       .style('font-weight', 'lighter')
//       .attr('transform', 'translate(-90, 250)')
//       // .on('click', () => {
//       //   let newYear;
//       //   if (year == '2016'){
//       //     newYear = '2007'
//       //   }else{
//       //     newYear =( Number(year) + 1)+ ""
//       //   }
//       //   d3.selectAll('#page-six-chart > *').remove()
//       //     this.drawData(savedData, newYear)
//       // })

//   //b2c graph 
//     const secondPie = d3.pie().value((d) => { return d[4]})(b2c)

//      const blueArc = d3.arc()
//                    .outerRadius(percentScale(percentB2C))
//                    .innerRadius(0)

//      const labelArc2 = d3.arc() 
//                   .outerRadius(percentScale(percentB2C) - 15)
//                   .innerRadius(percentScale(percentB2C) - 20)

//      const g2 = plot.selectAll('.arc-2')
//                    // .data(secondPie(b2c))
//                    .enter()
//                    .append('g')
//                    .attr('class', 'arc-2')
//                    .attr('transform', 'translate(800, 700)')
//           g.append('path')
//             .attr('d', blueArc)
//             .style('fill', (d, i) => blues(i))

//     g.append('text')
//      .attr('transform', (d) => 'translate(' + labelArc2.centroid(d) + ")" )
//      .attr('dy', '.35em')
//      .text((d) => { 
//        console.log('wat', d.data[4], d.data[2])
//       return d.data[2]})
//      .attr('fill', 'white')