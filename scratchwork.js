   // let ordinal = Object.keys(data)

    // let outline = d3.select('#viz').selectAll('rect .bars')
    //   .data(ordinal)
    //   .enter()
    //   .append('svg:rect')
    //   .attr('x','80')
    //   .attr('y', (d, i) => {
    //      let height = i*25
    //      return height
    //   })
    //   .attr('height', '25')
    //   .attr('width', '100')
    //   .style('stroke', 'black')
    //   .style('fill', 'none')
    //   .style('stroke-width', '1')


    // let complex = []
    //  for (let field in data) {
    //     complex.push(data[field])
    //  }

    // let labels = d3.select('#viz').selectAll('.label')
    //                .data(complex)
    //                .enter()
    //                .append('text')
    //                .attr('x', '120' )
    //                .attr('y', (d,i) => i*25-5)
    //                .attr('class',' label')
    //                .attr('stroke', '#28440c')
    //                .text((d) => d)
   
   // let currentY = 25;
   // data.forEach((datum, index) => {
   //  let outline = d3.select('#viz').selectAll(`rect. bars ${datum.name}`)
   //    .data(datum)
   //    .enter()
   //    .append('svg:rect')
   //    .attr('x', '80')
   //    .attr('y', (d, i) => {
   //      return currentY + i*25
   //    })
   // })


      let companyLoci = d3.select('#viz').selectAll('rect .bars companyLoci')
   .data(data[0])
   .enter()
   .append('svg:rect')
   .attr('x', '80')
   .attr('y', (d,i) => i*25)
   .attr('height', '25')
   .attr('width', '100')
   .style('stroke', 'black')
   .style('fill', 'none')
   .style('stroke-width', '1')

   // let clLabels = d3.selectAll('rect .bars companyLoci')
   // .append('text')
   // .attr('x', '120')
   // .attr('y', (d, i) => i*25-5)
   // .attr('class', 'clLabels')
   // .attr('stroke', 'black')
   // .text((d) => d.name)



      barcode:{ "CofC Terminal Case 2": "", 
               "CofC Terminal Case 1": "", 
               "2012_NAICS": "112519", 
               "Customer Product": "RP", 
               "Dictionary Position Description": "These companies catch and sell freshwater fish and seafood. They sell through food retailers.",
               "CofC Final Resource 2": "",
                "Enterprise Locus": "2.2.2 E3i", 
                "Customer Locus": "1.3.2 F", 
                "CofC Department Locus": "", 
                "Final Resource 1": "E4i 2.2.2 F", 
                "Final Resource 2": "", 
                "Customer of Customer Locus": "", 
                "Co-Customer Temporal": "", 
                "Customer Type": "Consumers",
                 "Relationship Type": "", 
                 "Department Locus": "DivA DivA",
                "Co-Customer Product": "",
                "Co-Customer Type": "", 
                "Intermediary 2 Type": "",
                "Co-Customer Locus": "", 
                "CofC Constituent Resource 2": "", 
                "CofC Product": "", 
                "Dictionary Position Title": "Fish and Seafood", 
                "Work Group 2": "", 
                "AD": "818.5", 
                "Intermediary 1 Locus": "(A4ii) 3.1.2 EDivA", 
                "Work Group 1": "DivA DivA", 
                "Constituent Resource 1": "E3i 1.3.2 E4DivA", 
                "Constituent Resource 2": "", 
                "CofC Type": "", 
                "Terminal Case 2": "", 
                "Terminal Case 1": "DivM", 
                "Customer Relationship": "", 
                "Customer Temporal": "First", 
                "CofC Constituent Resource 1": "", 
                "Enterprise Product": "RP", 
                "Process": "In-house", 
                "Intermediary 2 Locus": "", 
                "CofC Work Group 1": "", 
                "CofC Final Resource 1": "", 
                "2012_Title": "Other Aquaculture", 
                "CofC Work Group 2": "", 
                "Intermediary 1 Type": "With Inventory", 
                "Product Line": "Main"}

                      // flatBarcode: {
      //   cldr: "", 
      //   clvb:"2.2", 
      //   clobj:"B", 
      //   clio: "", 
      //   int1dr: "", 
      //   int1verb: "2.2", 
      //   int1obj: "B", 
      //   int1io: "", 
      //   int2dr: "A", 
      //   int2verb: "3.1", 
      //   int2obj: "B", 
      //   int2io:"", 
      //   pusub:"B", 
      //   puverb:"1.2", 
      //   puobj:"B", 
      //   domdr:"B", 
      //   domverb:"1.2",
      //   domobj:"B", 
      //   domio:"", 
      //   custdr:"B", 
      //   custverb:"1.2", 
      //   custobj:"B", 
      //   cpurlsubj:"B", 
      //   cpurlverb:"2.2", 
      //   cpurlobj: "E", 
      //   cpuwlverb:"2.2", 
      //   cpuwlobj:"E",
      //   cust2verb:"2.2", 
      //   cust2obj:"E",
      // }


         // let currentY = 25;
   // data.forEach((datum, index) => {
   //  let outline = d3.select('#viz').selectAll(`rect. bars ${datum.name}`)
   //    .data(datum)
   //    .enter()
   //    .append('svg:rect')
   //    .attr('x', '80')
   //    .attr('y', (d, i) => {
   //      return currentY + i*25
   //    })
   // })