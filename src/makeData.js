import * as d3 from 'd3';
//dictionary of verbs and nouns to colors
let dictionary = {
 'empty': '#E3E3E3',
  '1.2' : '#D8223F',
  '1.3' : '#E9611E',
  '2.2' : '#FCC528',
  '3.1' : '#8BBA25',
  '3.2' : '#018D5A', 
  '3.3' : '#1395BA',
  'A': '#9575CD', 
  'B' : '#64B5F6', 
  'C' : '#81C784',
  'D' : '#FFF176',
  'E' :  '#FFB74D',
  'F' : '#EF5350',
  'Div': '#616261',
 }

//dictionary of verbs and nouns to english
 let key = {
  'A': 'Real Estate ',
  'B': 'Machines ', 
  'C': 'Information ', 
  'D': 'Money ', 
  'E': 'Energy ',
  'F': 'People ',
  '1.2':'Transports ',
  '1.3': 'Houses ',
  '2.2': 'Produces ',
  '3.1': 'Sells ',
  '3.2': 'Exchanges ', 
  '3.3': 'Banks ',
  'Div': 'Various ', 

 }

//helper functions for hover-labels
export function show(group) {
     let selection = d3.selectAll(group)
     .classed('makeViz', true)
 }

export function hide(group){
     d3.selectAll(group)
     .classed('makeViz', false)
 }

const makeData = (data, clicker, status, distance) => {

let startHeight = 50;
let barLeft = 20;
let barHeight = 25;

  let intro = d3.select('#viz').append('text')
  			  .attr('x', () => barLeft)
  			  .attr('y', '0')
  			  .text(`Hi, I am a ${status} Company.`)
  			  .on('click', () => {
  			  	console.log('hi what')
  			  	clicker();
  			  })
  			  .attr('class', 'intro-barcode')

    let cl = []
    for (let field in data.cl){
     cl.push([field, data.cl[field]])
    }

    let clGroup = d3.select('#viz').append('g')

    let companyLocus = clGroup.selectAll('rect .bars')
      .data(cl)
      .enter()
      .append('svg:rect')
      .attr('x',() => barLeft + "")
      .attr('y', (d, i) => {
         let height = i * barHeight 
         return height +5 + startHeight
      })
      .attr('height', () => barHeight + "")
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!cl[i][1]) return dictionary['empty']
        return dictionary[cl[i][1]]
      })
      .attr('class', 'companyLocus')
      .on('mouseenter', () => {
      	show('.clEnglish')
      })
      .on('mouseleave', () =>{
      	hide('.clEnglish')
      })
  	 .on('click', () => {
  		 clicker();
  	   })
      
     let clHeader = clGroup.append('text')
      					.attr('x', () => barLeft-10 + "")
      					.attr('y', () => startHeight)
      					.attr('stroke', 'black')
      					.text('Company Locus')
    let clTranslate = ""

    cl.forEach((arr) => {
       if(arr[1]){
       	clTranslate+= key[arr[1]]
       }
    })

    let clEnglish = clGroup.append('text')
    						.attr('x', () => barLeft + 110 + "")
    						.attr('y', () => barHeight * 2 + startHeight)
    						.text(clTranslate)
    						.attr('class','clEnglish')

      let clLabel = clGroup.selectAll('.clLabel')
        .data(cl)
        .enter()
        .append('svg:text')
        .attr('x', () => barLeft + 40 + "")
        .attr('y', (d, i) => i*barHeight -5 +barHeight +5 + startHeight)
        .attr('stroke', 'black')
        .text((d, i) => cl[i][1] )

    
    let f1 = []
    for (let field in data.f1){
      f1.push([field, data.f1[field]])
    }

    let f1Group = clGroup.append('g')

    let f1Header = f1Group.append('text')
      				.attr('x', () => barLeft + "")
      				.attr('y', () => 120 + startHeight)
      				.attr('stroke', 'black')
      				.text('Intermediary 1')

    let firstInt = f1Group.selectAll('rect .bars')
      .data(f1)
      .enter()
      .append('svg:rect')
      .attr('x',() => barLeft + "")
      .attr('y', (d, i) => {
         let height = i* barHeight + 125 + startHeight
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
      .on('mouseenter', () => {
      	show('.f1English')
      })
      .on('mouseleave', () =>{
      	hide('.f1English')
      })

      let f1Label = clGroup.selectAll('.f1Label')
        .data(f1)
        .enter()
        .append('svg:text')
        .attr('x', () => barLeft + 40 + "")
        .attr('y', (d, i) => i*barHeight + (120) + 25 + startHeight)
        .attr('stroke', 'black')
        .text((d, i) => f1[i][1] )
   
    let f1Translate = ""

    f1.forEach((arr) => {
       if(arr[1]){
       	f1Translate+= key[arr[1]]
       }
    })

    let f1English = f1Group.append('text')
    						.attr('x', () => barLeft + 110 + "")
    						.attr('y', () => 180 + startHeight)
    						.text(f1Translate)
    						.attr('class','f1English')

    let f2 = []
    for (let field in data.f2){
      f2.push([field, data.f2[field]])
    }

    let f2Group = f1Group.append('g')
    
    let f2Header = f2Group.append('text')
      				.attr('x', () => barLeft + "")
      				.attr('y', () => 240 + startHeight)
      				.attr('stroke', 'black')
      				.text('Intermediary 2')

    let secondInt = f2Group.selectAll('rect .bars')
      .data(f2)
      .enter()
      .append('svg:rect')
      .attr('x',() => barLeft + "")
      .attr('y', (d, i) => {
         let height = i * barHeight + 245 + startHeight
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!f2[i][1]) return dictionary['empty']
        return dictionary[f2[i][1]]      

      })
      .on('mouseenter', () => {
      	show('.f2English')
      })
      .on('mouseleave', () =>{
      	hide('.f2English')
      })

      let f2Label = f2Group.selectAll('.f2Label')
        .data(f2)
        .enter()
        .append('svg:text')
        .attr('x', () => barLeft + 40 + "")
        .attr('y', (d, i) => i * barHeight + (240) + barHeight + startHeight)
        .attr('stroke', 'black')
        .text((d, i) => f2[i][1] )
    let f2Translate = ""

    f2.forEach((arr) => {
       if(arr[1]){
       	f2Translate+= key[arr[1]]
       }
    })

    let f2English = f2Group.append('text')
    						.attr('x', () => barLeft + 110 + "")
    						.attr('y', () => 290 + startHeight)
    						.text(f2Translate)
    						.attr('class','f2English')

    let cust = []
    for (let field in data.cust){
      cust.push([field, data.cust[field]])
    }
    let custGroup = f2Group.append('g')
    let custHeader = custGroup.append('text')
      				.attr('x', () => barLeft - 1 + "")
      				.attr('y', () => 360 + startHeight)
      				.attr('stroke', 'black')
      				.text('Customer Loci')
    let custBars = custGroup.selectAll('rect .bars')
      .data(cust)
      .enter()
      .append('svg:rect')
      .attr('x',() => barLeft + "")
      .attr('y', (d, i) => {
         let height = i * barHeight + 365 + startHeight
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!cust[i][1]) return dictionary['empty']
        return dictionary[cust[i][1]]
      })
      .on('mouseenter', () => {
      	show('.custEnglish')
      })
      .on('mouseleave', () =>{
      	hide('.custEnglish')
      })
    let custLabel = custGroup.selectAll('.custLabel')
        .data(cust)
        .enter()
        .append('svg:text')
        .attr('x', () => barLeft + 40 + "")
        .attr('y', (d, i) => i * barHeight + (360) + barHeight + startHeight)
        .attr('stroke', 'black')
        .text((d, i) => cust[i][1] )
    let custTranslate = ""

    cust.forEach((arr) => {
       if(arr[1]){
       	custTranslate+= key[arr[1]]
       }
    })

    let custEnglish = custGroup.append('text')
    						.attr('x', () => barLeft + 110 + "")
    						.attr('y', () => 420 + startHeight)
    						.text(custTranslate)
    						.attr('class','custEnglish')

    let cust2 = []
    for (let field in data.cust2){
      cust2.push([field, data.cust2[field]])
    }

    let cust2Group = custGroup.append('g')
    let cust2Header = cust2Group.append('text')
      				.attr('x', () => barLeft - 20  + "")
      				.attr('y', () => 480 + startHeight)
      				.attr('stroke', 'black')
      				.text('Customer of Customer')
    let cust2Bars = cust2Group.selectAll('rect .bars')
      .data(cust2)
      .enter()
      .append('svg:rect')
      .attr('x', () => barLeft + "")
      .attr('y', (d, i) => {
         let height = i * barHeight + 485 + startHeight
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!cust2[i][1]) return dictionary['empty']
        return dictionary[cust2[i][1]]
      })
      .on('mouseenter', () => {
      	show('.cust2English')
      })
      .on('mouseleave', () =>{
      	hide('.cust2English')
      })
    let cust2Label = cust2Group.selectAll('.custLabel')
        .data(cust2)
        .enter()
        .append('svg:text')
        .attr('x', () => barLeft + 40 +"")
        .attr('y', (d, i) => i*barHeight + (480) + barHeight + startHeight)
        .attr('stroke', 'black')
        .text((d, i) => cust2[i][1] )

    let cust2Translate = ""

    cust2.forEach((arr) => {
       if(arr[1]){
       	cust2Translate+= key[arr[1]]
       }
    })

    let cust2English = cust2Group.append('text')
    						.attr('x', () => barLeft + 110 + "")
    						.attr('y', () => 540 + startHeight)
    						.text(cust2Translate)
    						.attr('class','cust2English')

   let distanceScore = cust2Group.append('text')
  			                .attr('x', () => barLeft )
   							.attr('y', () => 30)
   							.text(`I have a distance score of ${distance}`)
   							.attr('class', 'distance-toggle')

} 
export default makeData;