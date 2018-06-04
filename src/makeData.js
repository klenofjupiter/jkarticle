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
  'A': 'Real Estate',
  'B': 'Machines', 
  'C': 'Information', 
  'D': 'Money', 
  'E': 'Energy',
  'F': 'People',
  '1.2':'Transports',
  '1.3': 'Stores',
  '2.2': 'Produces',
  '3.1': 'Sells',
  '3.2': 'Exchanges', 
  '3.3': 'Banks',
  'Div': 'Various', 
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

const makeData = (data, clicker, status, distance, businessClicker,showB2B) => {

let startHeight = 50;
let barLeft = 20;
let barHeight = 25;
 
  let plot = d3.select('#barcode-div')
               .append('svg')
               .attr('id', 'viz')
               .attr('class', "barcode-svg")

  let intro = d3.select('#barcode-div').append('div')
  			  // .attr('x', () => barLeft)
  			  // .attr('y', '0')
  			  .text(`Hi, I'm ${data.name}`)
  			  .attr('class', 'intro-barcode')


    let cl = []
    for (let field in data.cl){
     cl.push([field, data.cl[field]])
    }

    let clGroup = d3.select('#viz').append('g')
      .on('mouseenter', () => {
        show('.clCode')
      })
      .on('mouseleave', () =>{
        hide('.clCode')
      })

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


      
     let clHeader = clGroup.append('text')
      					.attr('x', () => barLeft-10 + "")
      					.attr('y', () => startHeight)
      					.attr('stroke', 'black')
      					.text('Company Locus')


      let clLabel = clGroup.selectAll('.clLabel')
        .data(cl)
        .enter()
        .append('svg:text')
        .attr('x', (d,i) => {
          if(cl[i][0] === 'dr' || cl[i][0] === 'io'){
        	 return barLeft + 4
           }
        	return barLeft + 10 
        })
        .attr('y', (d, i) => i*barHeight -5 +barHeight +5 + startHeight)
        .attr('stroke', 'black')
        .text((d, i) => {
            if((cl[i][0] === 'dr' || cl[i][0] === 'io')&& cl[i][1]){
            	return "("+key[cl[i][1]]+")"
            }
        	return key[cl[i][1]]
        })

      let clLCS = clGroup.selectAll('.clCode')
      			  .data(cl)
      			  .enter()
      			  .append('text')
      			  .attr('class', 'clCode')
      			  .attr('x', () => barLeft + 110)
      			  .attr('y', (d,i) => i * barHeight -5 + barHeight +5 + startHeight)
      			  .attr('stroke', 'black')
      			  .text((d,i) => cl[i][1])
    
    let f1 = []
    for (let field in data.f1){
      f1.push([field, data.f1[field]])
    }

    let f1Group = d3.select('#viz').append('g')
                        .on('mouseenter', () => {
                          show('.f1Code')
                        })
                        .on('mouseleave', () =>{
                          hide('.f1Code')
                        })

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


      let f1Label = f1Group.selectAll('.f1Label')
        .data(f1)
        .enter()
        .append('svg:text')
        .attr('x', (d,i) => {
          if(f1[i][0] === 'dr' || f1[i][0] === 'io'){
        	 return barLeft + 4
           }
        	return barLeft + 10 
        })
        .attr('y', (d, i) => i*barHeight + (120) + 25 + startHeight)
        .attr('stroke', 'black')
        .text((d, i) => {
            if((f1[i][0] === 'dr' || f1[i][0] === 'io')&& f1[i][1]){
            	return "("+key[f1[i][1]]+")"
            }
        	return key[f1[i][1]]
        })
   
      let f1LCS = f1Group.selectAll('.f1Code')
      			  .data(f1)
      			  .enter()
      			  .append('text')
      			  .attr('class', 'f1Code')
      			  .attr('x', () => barLeft + 110)
      			  .attr('y', (d, i) => i*barHeight + (120) + 25 + startHeight)
      			  .attr('stroke', 'black')
      			  .text((d,i) => f1[i][1])


    let f2 = []
    for (let field in data.f2){
      f2.push([field, data.f2[field]])
    }

    let f2Group = d3.select('#viz').append('g')
                        .on('mouseenter', () => {
                          show('.f2Code')
                        })
                        .on('mouseleave', () =>{
                          hide('.f2Code')
                        })
    
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


      let f2Label = f2Group.selectAll('.f2Label')
        .data(f2)
        .enter()
        .append('svg:text')
        .attr('x', (d,i) => {
          if(f2[i][0] === 'dr' || f2[i][0] === 'io'){
        	 return barLeft + 4
           }
        	return barLeft + 10 
        })
        .attr('y', (d, i) => i * barHeight + (240) + barHeight + startHeight)
        .attr('stroke', 'black')
        .text((d, i) => {
            if((f2[i][0] === 'dr' || f2[i][0] === 'io')&& f2[i][1]){
            	return "("+key[f2[i][1]]+")"
            }
        	return key[f2[i][1]]
        })


     let f2LCS = f2Group.selectAll('.f2Code')
      			  .data(f2)
      			  .enter()
      			  .append('text')
      			  .attr('class', 'f2Code')
      			  .attr('x', () => barLeft + 110)
        		  .attr('y', (d, i) => i * barHeight + (240) + barHeight + startHeight)
      			  .attr('stroke', 'black')
      			  .text((d,i) => f2[i][1])

    let cust = []
    for (let field in data.cust){
      cust.push([field, data.cust[field]])
    }
    let custGroup = d3.select('#viz').append('g')
                        .on('mouseenter', () => {
                          show('.custCode')
                        })
                        .on('mouseleave', () =>{
                          hide('.custCode')
                        })
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

    let custLabel = custGroup.selectAll('.custLabel')
        .data(cust)
        .enter()
        .append('svg:text')
        .attr('x', (d,i) => {
          if(cust[i][0] === 'dr' || cust[i][0] === 'io'){
        	 return barLeft + 4
           }
        	return barLeft + 10 
        })
        .attr('y', (d, i) => i * barHeight + (360) + barHeight + startHeight)
        .attr('stroke', 'black')
        .text((d, i) => {
            if((cust[i][0] === 'dr' || cust[i][0] === 'io')&& cust[i][1]){
            	return "("+key[cust[i][1]]+")"
            }
        	return key[cust[i][1]]
        })

  
     let custLCS = custGroup.selectAll('.custCode')
      			  .data(cust)
      			  .enter()
      			  .append('text')
      			  .attr('class', 'custCode')
      			  .attr('x', () => barLeft + 110)
        		  .attr('y', (d, i) => i * barHeight + (360) + barHeight + startHeight)
      			  .attr('stroke', 'black')
      			  .text((d,i) => cust[i][1])

    let cust2 = []
    for (let field in data.cust2){
      cust2.push([field, data.cust2[field]])
    }

    let cust2Group = d3.select('#viz').append('g')
                        .on('mouseenter', () => {
                          show('.cust2Code')
                        })
                        .on('mouseleave', () =>{
                          hide('.cust2Code')
                        })


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

    let cust2Label = cust2Group.selectAll('.custLabel')
        .data(cust2)
        .enter()
        .append('svg:text')
        .attr('x', (d,i) => {
          if(cust[i][0] === 'dr' || cust[i][0] === 'io'){
        	 return barLeft + 4
           }
        	return barLeft + 10 
        })
        .attr('y', (d, i) => i*barHeight + (480) + barHeight + startHeight)
        .attr('stroke', 'black')
        .text((d, i) => {
            if((cust2[i][0] === 'dr' || cust2[i][0] === 'io')&& cust2[i][1]){
            	return "("+key[cust2[i][1]]+")"
            }
        	return key[cust2[i][1]]
        })

     let cust2LCS = cust2Group.selectAll('.cust2Code')
      			  .data(cust2)
      			  .enter()
      			  .append('text')
      			  .attr('class', 'cust2Code')
      			  .attr('x', () => barLeft + 110)
        		  .attr('y', (d, i) => i * barHeight + (480) + barHeight + startHeight)
      			  .attr('stroke', 'black')
      			  .text((d,i) => cust2[i][1])



   let distanceGroup = d3.select('#viz').append('g')



   let distanceScore = distanceGroup.append('text')
  			                .attr('x', () => barLeft + 150)
   							.attr('y', () => startHeight + 80)
   							.text(`I have a distance score of ${distance}.`)
   							.attr('class', 'distance-toggle')
   							
    let distanceSwitch = distanceGroup.append('text')
    						.attr('x', () => barLeft + 150)
    						.attr('y', startHeight + 100)
    						.attr('class', 'distance-toggle')
    						.text(() => {
    						  if(distance == 0){
    						  	return 'My customer is the final consumer'
    						  } else if(distance == 1){
    						  	return 'I am one step from the consumer'
    						  } else {
    						  	return 'I am a few steps from the consumer'
    						  }
    						})


    let distanceUp = distanceGroup.append('polygon')
    							.attr('points', "190,175 210,155 230,175")
    							.style('fill', '#1da513')
    							.attr('class', 'distance-toggle')
    							.on('click', () => {
    								clicker(true);
    							})
    let upLabel = distanceGroup.append('text')
    							.attr('x', '240')
    							.attr('y', '170')
    							.text('raise my distance score')
    							.attr('class', 'distance-toggle')

    let distanceDown = distanceGroup.append('polygon')
    							.attr('points', "190,180 210,200 230,180")
    							.style('fill', '#0f5b0a')
    							.attr('class', 'distance-toggle')
    							.on('click', () => {
    								clicker(false);
    							})    
    let downLable = distanceGroup.append('text')
    							.attr('x', '240')
    							.attr('y', '190')
    							.text('lower it')
    							.attr('class', 'distance-toggle')

    let narrativeGroup = d3.select('#viz').append('g')
    				.on('click', () => {
    				  if(showB2B){
    					businessClicker();
    				  }
    				})
    				.attr('class', 'narrative')

    let narrative1 = narrativeGroup.append('text')
    				.attr('x', () => barLeft + 150)
    				.attr('y', () => startHeight + 10)
    				.text(() => `I'm a ${data.status} company.`)

    let narrative2 = narrativeGroup.append('text')
    				.attr('x', () => barLeft + 150)
    				.attr('y', () => startHeight + 30)
    				.text(() => {
    				 if(status === 'B2C'){
    				 	return 'I deliver directly to consumers.'
    				 }else{
    				 	return 'I work with other businesses.'
    				 }
    				})


    let narrative3 = narrativeGroup.append('text')
    				.attr('x', () => barLeft + 150)
    				.attr('y', () => startHeight+50)
    				.text('click here to change my status')


} 
export default makeData;