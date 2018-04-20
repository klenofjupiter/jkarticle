import React, { Component } from 'react';
import './App.css';

import Barcode from './Barcode.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      //the entire barcode, to be passed down to Barcode Component as props --  use only codes here, write rules for english translation in the Barcode Component
      //NOTE: REQUIRE HELP TRANSLATING BARCODE FIELDS
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
        pucl: {
          // name: "Product Use Constituent Loci",
          subject:"",
          verb: "",
          object: "",
        },
         pufl: {
          // name: "Product Use Final Loci",
          subject: "B", 
          verb: "1.2", 
          object: "B",
        }, 
        dom: {
          // name: "Domain",
          dr: "B", 
          verb: "1.2", 
          object:"B", 
          io:"", 
        }, 
        cust: {
          // name: "Customer Loci",
          dr:"B", 
          verb: "1.2", 
          object: "B",
          io:""
        }, 
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
      }, 

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Using Locus to Compare B2B/B2C Companies</h1>
        </header>
        <div className="grid-container">
        <article className="grid-left">
          <section className="intro">
            <p>A common distinction made in business is between B2B (businesses that sell to other businesses) and B2C (businesses that sell to consumers) companies. While it is easy to determine if a single company is B2B or B2C, it is not entirely straightforward when attempting to do so for many companies within a dataset.</p>
            <p>Picture your local grocery store. Chances are, the products are organized in some variant of the following: baked goods and fresh vegetables in one aisle, raw meats in another, followed by frozen foods and dairy products, and candy across from soft drinks in the final aisle.</p>
            <p>The difference between the grocery store just described and the grocery stores that exist in reality is similar to that of the Locus Classification System (LCS) and traditional classification systems used by governmental agencies, academics, and investment firms. A key factor is that Locus stores multiple attributes about companies in a standardized structure referred to as the barcode (illustrated on the right).</p>
            <p>Let’s talk through multiple attributes with B2B and B2C distinctions in mind.</p>
            <h3>Multiple Attributes</h3>
            <p>Traditional classification systems are organized in a hierarchical (i.e. tree-like) taxonomies. This system of storing information is easy to navigate, but makes it difficult to find companies based on criteria that differ from those used to determine the original taxonomy. For example, B2B/B2C is not a GICS criterion, and so the most granular GICS groups contain both types of businesses, such as residential and commercial real estate companies, or apparel companies that sell directly and indirectly to consumers.</p>
            <p>In contrast, the Locus barcode specifies what a company does (produce engines), the customer (shipping companies), the intermediaries that exist (truck manufacturers and truck retailers) between them and the customer, how the customer uses the product (transport industrial equipment), and the customer’s customer (processed food manufacturer).</p>
            <p>This allows users to make flexible groupings based on any desired criteria. For example, in order to select all B2C companies, we can query for all companies who i) have consumers as customers and ii) do not have intermediaries between them and their customers. The resulting company list will include apparel retailers, media streaming services, pharmacies, and many others.</p>
          </section>
          <section className="B2B-and-B2C">
            <p className="set-up">Going back to our goal of studying the differences between B2B and B2C companies, we used revenue data from S&P’s Compustat database for 2,037 publicly-traded US companies over the past 10 years.</p>
            <h2>B2B and B2C</h2>
            <p>In our dataset, B2B companies (1,252) outnumber B2C companies (380)</p>
            <p>In 2016, B2B companies totaled $6.8 trillion dollars in revenue, while B2C companies totaled $3.6 trillion dollars.</p>
            <p>While there are more B2B public companies in the United States and they account for more of the total revenue, the revenue per company is larger in B2C companies. This is illustrated in the charts above, with the revenue per company in B2C companies being 25% to 50% larger than B2B companies.</p>
            <p>Notice also that while the total revenue of B2C companies increases steadily over the years, the revenue of B2B companies is more volatile, particularly between 2008-2011.</p>
            <span>chart goes here</span> <span>chart goes here</span>
          </section>
          <section className="Proximity-to-Consumers">
            <h2>Proximity to Consumers</h2>
            <p>Applying this algorithm to all companies in our dataset, we arrive at distance scores between 0 (company interacts directly with the consumer) and 5 (company is several steps removed from consumers). The advantage of this method is being able to differentiate B2B companies that are closer to consumers and for whom consumer brand perception matters more (e.g. Apple, Ford — both with scores of 1) from those more squarely in the B2B category (e.g. Boeing, IBM — scores of 4 and 5, respectively).</p>
            <p>Looking at the average revenue per company (left) in each of these groups, it is clear that the companies closer to consumers (denoted with blue lines) have higher revenue than those more distant. However, the median revenue (right) — which is less susceptible to extreme values — shows no distinct pattern. </p>
            <span>chart goes here</span> <span>chart goes here</span>
            <p>The mean values are skewed by high revenue outliers almost exclusively in companies close to consumers (scores closer to 0). We can confirm this by looking at the standard deviations (plotted below), which measures the variability of revenue within each group. Particularly in the past five years, the standard deviation is two to five times larger in companies close to consumers.</p>
            <span>chart goes here </span>
            <p>Alternatively, we can use boxplots to observe where the bulk of revenues earned by companies in each group lies. </p>
            <span> chart goes here </span>
            <p>Here you can see the large numbers of “outliers” in companies with distance scores of 0-1. These are the companies that have extremely high revenues in comparison to their peers. The bulk of companies, however, have roughly similar revenues regardless of their distance scores.</p>
            <p>In short, the vast majority of all companies can expect to have revenue of not more than $20-50 billion a year, and only companies close to consumers are breaking that ceiling.</p>
          </section>
          <section className="Conclusion">
            <h2>Conclusion</h2>
            <p>In this report we found that there are more B2B than B2C publicly-traded companies in the U.S, and they have higher revenues overall ($6.8 trillion versus $3.6 trillion, respectively), but the revenue per company is higher in B2C companies. When breaking down these companies into six tiers (scores of 0 to 5) based on their proximity to consumers, we observed the reason for the higher amounts of revenue per company in companies close to or interacting directly with consumers — the presence of a small number of extremely high-grossing companies such as UnitedHealth and Walmart. </p>
            <p>There are a number of other questions we could explore through this lens. For example, what are the domains in which B2B and B2C companies’ products are used? Or, is there a moderating effect of resource category on the variability in revenue observed in companies closer to consumers? We hope to continue exploring other ways of dissecting this data using our multi-attribute classification system.</p>
          </section>
        </article>
        <Barcode className="barcode-viz grid-right" data={this.state.barcode}/>
        </div>
      </div>
    );
  }
}

export default App;