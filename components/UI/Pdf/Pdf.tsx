import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 20,
    height: 100,
    textAlign: "center",
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  invoiceTable: {
    width: "40%",
    borderCollapse: "collapse",
  },
  invoiceTableHeader: {
    backgroundColor: "#4f81bd",
    color: "#fff",
    padding: 8,
  },
  invoiceTableCell: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  invoiceTableTh: {
    padding: 8,
  },
});

const invoices = [
  {
    number: "INV-001",
    customer: "Customer A",
    amount: "$100.00",
    status: "Paid",
  },
  {
    number: "INV-002",
    customer: "Customer B",
    amount: "$150.00",
    status: "Unpaid",
  },
  // Add more invoices as needed
];

const Invoice = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        {/* <Text>Invoice Report</Text>
        <Text>Date: [Insert Date]</Text> */}
      </View>

      <View style={styles.addressContainer}>
        <View style={{ width: "40%" }}>
          <Text style={styles.invoiceTableHeader}>SERVICES TO</Text>
          <View style={styles.invoiceTable}>
            <View style={styles.invoiceTableCell}>
              <Text>Invoice#: 0000000</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>Date: 10-02-2024</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>Customer ID: QPT121223</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>Q PLUS TRADING</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>Contact: info@amalgamatetechnologies.com</Text>
            </View>
          </View>
        </View>

        <View style={{ width: "40%" }}>
          <p>
            <Text style={styles.invoiceTableHeader}>BILL TO</Text>
          </p>
          <View style={styles.invoiceTable}>
            <View style={styles.invoiceTableCell}>
              <Text>Q PLUS TRADING</Text>
            </View>
            <View style={styles.invoiceTableCell}></View>
            <View style={styles.invoiceTableCell}>
              <Text>DOHA,QATAR</Text>
            </View>
            <View style={styles.invoiceTableCell}></View>
            <View style={styles.invoiceTableCell}></View>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.invoiceTableHeader}>Invoices</Text>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={styles.invoiceTableTh}>Invoice Number</th>
              <th style={styles.invoiceTableTh}>Customer Name</th>
              <th style={styles.invoiceTableTh}>Amount</th>
              <th style={styles.invoiceTableTh}>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice: any, index: any) => (
              <tr key={index}>
                <td style={styles.invoiceTableCell}>{invoice.number}</td>
                <td style={styles.invoiceTableCell}>{invoice.customer}</td>
                <td style={styles.invoiceTableCell}>{invoice.amount}</td>
                <td style={styles.invoiceTableCell}>{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </View>
    </Page>
  </Document>
);

export default Invoice;
