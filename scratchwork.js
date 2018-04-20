        // let pucl = []
    // for (let field in data.pucl){
    //   pucl.push([field, data.pucl[field]])
    // }
    // let puclGroup = f2Group.append('g')

    // let puclBars = puclGroup.selectAll('rect .bars')
    //   .data(pucl)
    //   .enter()
    //   .append('svg:rect')
    //   .attr('x','80')
    //   .attr('y', (d, i) => {
    //      let height = i*25 + 360
    //      return height
    //   })
    //   .attr('height', '25')
    //   .attr('width', '100')
    //   .style('stroke', 'none')
    //   .style('fill', (d, i) => {
    //     if (!pucl[i][1]){
    //       return '#565655'
    //     }
    //     if(pucl[i][1] === '2.2'){
    //       return '#FCC528'
    //     }
    //     if(pucl[i][1] === 'B') {
    //       return "#64B5F6"
    //     }
    //     if(pucl[i][1] === 'A') {
    //       return "#9575CD"
    //     }
    //     if(pucl[i][1] === '3.1') {
    //       return "#8BBA25"
    //     }        

    //   })
    // let puclLabel = puclGroup.selectAll('.puclLabel')
    //     .data(pucl)
    //     .enter()
    //     .append('svg:text')
    //     .attr('x', '120')
    //     .attr('y', (d, i) => i*25 + (240-5) + 25)
    //     .attr('stroke', 'black')
    //     .text((d, i) => pucl[i][1] )

    // let pufl = []
    // for (let field in data.pufl){
    //   pufl.push([field, data.pufl[field]])
    // }
    // let puflGroup = puclGroup.append('g')
    // let puflBars = puflGroup.selectAll('rect .bars')
    //   .data(pufl)
    //   .enter()
    //   .append('svg:rect')
    //   .attr('x','80')
    //   .attr('y', (d, i) => {
    //      let height = i*25 + 360
    //      return height
    //   })
    //   .attr('height', '25')
    //   .attr('width', '100')
    //   .style('stroke', 'none')
    //   .style('fill', (d, i) => {
    //     if (!pufl[i][1]){
    //       return '#565655'
    //     }
    //     if(pufl[i][1] === '2.2'){
    //       return '#FCC528'
    //     }
    //     if(pufl[i][1] === 'B') {
    //       return "#64B5F6"
    //     }
    //     if(pufl[i][1] === 'A') {
    //       return "#9575CD"
    //     }
    //     if(pufl[i][1] === '3.1') {
    //       return "#8BBA25"
    //     }
    //     if(pufl[i][1] === '1.2') {
    //       return "#D8223F"
    //     }
    //   })
    // let puflLabel = puflGroup.selectAll('.puflLabel')
    //     .data(pufl)
    //     .enter()
    //     .append('svg:text')
    //     .attr('x', '120')
    //     .attr('y', (d, i) => i*25 + (360-5) + 25)
    //     .attr('stroke', 'black')
    //     .text((d, i) => pufl[i][1] )

    // let dom = []
    // for (let field in data.dom){
    //   dom.push([field, data.dom[field]])
    // }
    // let domGroup = puflGroup.append('g')

    // let domBars = domGroup.selectAll('rect .bars')
    //   .data(dom)
    //   .enter()
    //   .append('svg:rect')
    //   .attr('x','80')
    //   .attr('y', (d, i) => {
    //      let height = i*25 + 460
    //      return height
    //   })
    //   .attr('height', '25')
    //   .attr('width', '100')
    //   .style('stroke', 'none')
    //   .style('fill', (d, i) => {
    //     if (!dom[i][1]){
    //       return '#565655'
    //     }
    //     if(dom[i][1] === '2.2'){
    //       return '#FCC528'
    //     }
    //     if(dom[i][1] === 'B') {
    //       return "#64B5F6"
    //     }
    //     if(dom[i][1] === 'A') {
    //       return "#9575CD"
    //     }
    //     if(dom[i][1] === '3.1') {
    //       return "#8BBA25"
    //     }
    //     if(dom[i][1] === '1.2') {
    //       return "#D8223F"
    //     }
    //   })
    // let domLabel = domGroup.selectAll('.domLabel')
    //     .data(dom)
    //     .enter()
    //     .append('svg:text')
    //     .attr('x', '120')
    //     .attr('y', (d, i) => i*25 + (460-5) + 25)
    //     .attr('stroke', 'black')
    //     .text((d, i) => dom[i][1] )


    // let cpul = []
    // for (let field in data.cpul){
    //   cpul.push([field, data.cpul[field]])
    // }
    // let cpulGroup = custGroup.append('g')

    // let cpulBars = cpulGroup.selectAll('rect .bars')
    //   .data(cpul)
    //   .enter()
    //   .append('svg:rect')
    //   .attr('x','80')
    //   .attr('y', (d, i) => {
    //      let height = i*25 + 700
    //      return height
    //   })
    //   .attr('height', '25')
    //   .attr('width', '100')
    //   .style('stroke', 'red')
    //   .style('stroke-width', '3')
    //   .style('fill', (d, i) => {
    //     if (!cpul[i][1]){
    //       return '#565655'
    //     }
    //     if(cpul[i][1] === '2.2'){
    //       return '#FCC528'
    //     }
    //     if(cpul[i][1] === 'B') {
    //       return "#64B5F6"
    //     }
    //     if(cpul[i][1] === 'A') {
    //       return "#9575CD"
    //     }
    //     if(cpul[i][1] === '3.1') {
    //       return "#8BBA25"
    //     }
    //     if(cpul[i][1] === '1.2') {
    //       return "#D8223F"
    //     }
    //     if(cpul[i][1] === 'E') {
    //       return '#FFB74D'
    //     }
    //   })
    //   .on('click', () => { clicker(); })
    // let cpulLabel = cpulGroup.selectAll('.cpulLabel')
    //     .data(cpul)
    //     .enter()
    //     .append('svg:text')
    //     .attr('x', '120')
    //     .attr('y', (d, i) => i*25 + (700-5) + 25)
    //     .attr('stroke', 'black')
    //     .text((d, i) => cpul[i][1] )


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



    this.state = {
      //the entire barcode, to be passed down to Barcode Component as props --  use only codes here, write rules for english translation in the Barcode Component
      //NOTE: REQUIRE HELP TRANSLATING BARCODE FIELDS
      status: "B2B",
      distance: "3",
      barcode: {
         cl: {
          // name: "Company Loci",
          dr: "", 
          verb: "2.2", 
          object: "B", 
          io: "", 
        }, 
         f1: {
          // name: "First Intermediary",
          dr: "", 
          verb: "2.2", 
          object: "B", 
          io: "", 
        }, 
        f2: {
          // name: "Second Intermediary",
          dr: "A", 
          verb: "3.1", 
          object: "B", 
          io: "", 
        }, 
        // pucl: {
        //   // name: "Product Use Constituent Loci",
        //   subject:"",
        //   verb: "",
        //   object: "",
        // },
        //  pufl: {
        //   // name: "Product Use Final Loci",
        //   subject: "B", 
        //   verb: "1.2", 
        //   object: "B",
        // }, 
        // dom: {
        //   // name: "Domain",
        //   dr: "B", 
        //   verb: "1.2", 
        //   object:"B", 
        //   io:"", 
        // }, 
        cust: {
          // name: "Customer Loci",
          dr:"B", 
          verb: "1.2", 
          object: "B",
          io:""
        }, 
        // cpul: {
        //   subject:"B",
        //   verb:"2.2", 
        //   object:"E",
        // },
        // customerProductUseLoci: {
        //   resourceLoci: {
        //     subject: "B", 
        //     verb: "2.2", 
        //     object: "E",
        //   }, 
        //   workLoci: {
        //     verb:"2.2", 
        //     object:"E",
        //   }
        // }, 
        cust2: {
          // name: "Customer of Customer Loci",
          dr: "",
          verb: "2.2", 
          object: "E",
          io: "",
        }
