import React, { Component } from 'react';
import './App.css';

import Canvas from './Canvas.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Title: B2B or not B2B: Using Locus to Compare B2B/B2C Companies</h1>
        </header>
        <div className="grid-container">
        <Canvas className="barcode-viz" />
        <article className="content">
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
            <p>
          </section>
        </article>
        </div>
      </div>
    );
  }
}

export default App;
