import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import * as moment from "moment";
import path from 'path';

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  header: {
    height: 100,
    textAlign: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 550,
    backgroundColor: "#cccccc", 
  },
  companyInfo: {
    textAlign: "right",
    fontSize: 12,
    fontWeight: "bold",
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  invoiceTable: {
    width: "100%",
    borderCollapse: "collapse",
    paddingBottom: 8,
  },
  invoiceTable2: {
    width: "100%",
    borderCollapse: "collapse",
    paddingBottom: 8,
    textAlign: "right",
  },
  invoiceTableHeader: {
    backgroundColor: "#4f81bd",
    color: "#fff",
    textAlign: "center",
    padding: 3,
    fontSize: 12,
    fontWeight: "extrabold",
  },
  invoiceTableCell: {
    padding: 3,
    fontSize: 10,
    width: "100%",
  },
  invoiceTableTh: {
    padding: 8,
  },
  serviceTable: {
    width: "100%",
    borderCollapse: "collapse",
    padding: 8,
    textAlign: "right",
  },
  serviceTableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceTableColum1: {
    width: "60%",
    borderCollapse: "collapse",
    // border: 0.5,
    borderLeft: 0.5,
    borderBottom: 0.5,
  },
  serviceTableColum2: {
    width: "40%",
    borderLeft: 0.5,
    borderBottom: 0.5,
    borderRight: 0.5,
  },
  serviceTableHeader: {
    backgroundColor: "#f2f3f3",
    textAlign: "center",
    padding: 3,
    fontSize: 10,
    fontWeight: "extrabold",
    borderTop: 0.5,
  },
  serviceTableCell1: {
    padding: 3,
    fontSize: 10,
    width: "100%",
    textAlign: "left",
  },
  serviceTableCell2: {
    padding: 3,
    fontSize: 10,
    width: "100%",
  },
});

const PDFDocument = (props: any) => {
  const { data } = props;

  const date = moment.utc(data?.installation_date).format("DD");
  const month = moment.utc(data?.installation_date).format("MM");
  const current_year = moment.utc(new Date()).format("YYYY");
  const current_amc = moment
    .utc(month + "/" + date + "/" + current_year)
    .format("DD-MMM-YYYY");
  const next_amc = moment
    .utc(month + "/" + date + "/" + current_year)
    .add(365, "d")
    .format("DD-MMM-YYYY");

  const logoPath = path.join(process.cwd(), 'public', 'assets', 'logo', 'new_logo.jpg');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {/* Header Section with Logo */}
          <View style={styles.header}>
          <Image
            style={styles.logo}
            src={logoPath}
          />
          </View>
        </View>

        <View style={styles.addressContainer}>
          <View style={{ width: "40%" }}>
            <Text style={styles.invoiceTableHeader}>SERVICES TO</Text>
            <View style={styles.invoiceTable}>
              <View style={styles.invoiceTableCell}>
                <Text>Invoice No: #{moment.utc(new Date()).valueOf()}</Text>
              </View>
              <View style={styles.invoiceTableCell}>
                <Text>Date: {moment.utc(new Date()).format("DD/MM/YYYY")}</Text>
              </View>
              <View style={styles.invoiceTableCell}>
                <Text>Customer ID: {data.client_id}</Text>
              </View>
              <View style={styles.invoiceTableCell}>
                <Text>{data.client?.customer_name}</Text>
              </View>
              <View style={styles.invoiceTableCell}>
                <Text>Branch: {data.branch_name}</Text>
              </View>
            </View>
          </View>

          <View style={{ width: "40%" }}>
            <Text style={styles.invoiceTableHeader}>BILL TO</Text>
            <View style={styles.invoiceTable2}>
              <View style={styles.invoiceTableCell}>
                <Text>{data.client?.customer_name}</Text>
              </View>
              <View style={styles.invoiceTableCell}>
                <Text>Contact: {data.client?.email}</Text>
              </View>
              {/* <View style={styles.invoiceTableCell}></View> */}
              <View style={styles.invoiceTableCell}>
                <Text>{data.client?.shop_address}</Text>
              </View>
              <View style={styles.invoiceTableCell}></View>
              <View style={styles.invoiceTableCell}></View>
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "extrabold",
              textAlign: "center",
            }}
          >
            AMC INVOICE
          </Text>
          <Text style={styles.invoiceTableHeader}>SERVICES</Text>
          <View style={styles.serviceTable}>
            <View style={styles.serviceTableRow}>
              <View style={styles.serviceTableColum1}>
                <Text style={styles.serviceTableHeader}>DESCRIPTION</Text>
              </View>
              <View style={styles.serviceTableColum2}>
                <Text style={styles.serviceTableHeader}>DATE</Text>
              </View>
            </View>
            <View style={styles.serviceTableRow}>
              <View style={styles.serviceTableColum1}>
                <Text style={styles.serviceTableCell1}>Installation Date</Text>
              </View>
              <View style={styles.serviceTableColum2}>
                <Text style={styles.serviceTableCell2}>
                  {data.installation_date
                    ? moment.utc(data?.installation_date).format("DD-MMM-YYYY")
                    : null}
                </Text>
              </View>
            </View>
            <View style={styles.serviceTableRow}>
              <View style={styles.serviceTableColum1}>
                <Text style={styles.serviceTableCell1}>{` `}</Text>
              </View>
              <View style={styles.serviceTableColum2}>
                <Text style={styles.serviceTableCell2}>{` `}</Text>
              </View>
            </View>
            <View style={styles.serviceTableRow}>
              <View style={styles.serviceTableColum1}>
                <Text style={styles.serviceTableCell1}>AMC Duration</Text>
              </View>
              <View style={styles.serviceTableColum2}>
                <Text style={styles.serviceTableCell2}>
                  {data.installation_date
                    ? `${current_amc} to ${next_amc}`
                    : null}
                </Text>
              </View>
            </View>{" "}
            <View style={styles.serviceTableRow}>
              <View style={styles.serviceTableColum1}>
                <Text style={styles.serviceTableCell1}>
                  Next AMC Renewal Date
                </Text>
              </View>
              <View style={styles.serviceTableColum2}>
                <Text style={styles.serviceTableCell2}>
                  {data.installation_date ? next_amc : null}
                </Text>
              </View>
            </View>
            <View style={styles.serviceTableRow}>
              <View style={styles.serviceTableColum1}>
                <Text style={styles.serviceTableCell1}>{` `}</Text>
              </View>
              <View style={styles.serviceTableColum2}>
                <Text style={styles.serviceTableCell2}>{` `}</Text>
              </View>
            </View>
            <View style={styles.serviceTableRow}>
              <View style={styles.serviceTableColum1}>
                <Text style={{ ...styles.serviceTableHeader, borderTop: 0 }}>
                  DESCRIPTION
                </Text>
              </View>
              <View style={styles.serviceTableColum2}>
                <Text style={{ ...styles.serviceTableHeader, borderTop: 0 }}>
                  AMOUNT
                </Text>
              </View>
            </View>
            <View style={styles.serviceTableRow}>
              <View style={styles.serviceTableColum1}>
                <Text
                  style={styles.serviceTableCell1}
                >{`${data?.software_name.toUpperCase()} - YEAR ${moment
                  .utc(new Date())
                  .format("YYYY")}`}</Text>
              </View>
              <View style={styles.serviceTableColum2}>
                <Text
                  style={styles.serviceTableCell2}
                >{`QR ${(+data?.amc).toFixed(2)}`}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.serviceTableRow}>
          <View style={{ width: "60%" }}>
            <Text style={styles.invoiceTableHeader}>Notes</Text>
            <View style={{ border: 0.5, height: 55 }}>{` `}</View>
          </View>
          <View style={{ width: "40%", padding: 8 }}>
            <View style={styles.serviceTableRow}>
              <View style={{ width: "40%", padding: 5, textAlign: "right" }}>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                  SUBTOTAL:
                </Text>
              </View>
              <View style={{ width: "60%", padding: 5, textAlign: "right" }}>
                <Text
                  style={{ fontSize: 10, fontWeight: "bold" }}
                >{`QR ${(+data?.amc).toFixed(2)}`}</Text>
              </View>
            </View>
            <View style={styles.serviceTableRow}>
              <View style={{ width: "40%", padding: 5, textAlign: "right" }}>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>OTHER:</Text>
              </View>
              <View style={{ width: "60%", padding: 5, textAlign: "right" }}>
                <Text
                  style={{ fontSize: 10, fontWeight: "bold" }}
                >{`QR 0.00`}</Text>
              </View>
            </View>
            <View style={styles.serviceTableRow}>
              <View style={{ width: "40%", padding: 5, textAlign: "right" }}>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                  TOTAL:{" "}
                </Text>
              </View>
              <View style={{ width: "60%", padding: 5, textAlign: "right" }}>
                <Text
                  style={{
                    ...styles.invoiceTableHeader,
                    fontSize: 10,
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >{`QR ${(+data?.amc).toFixed(2)}`}</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 10, marginBottom: 20, padding: 5 }}>
            Please contact at +974 30611913 with any questions regarding this
            invoice
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 10, marginBottom: 5, padding: 5 }}>
            Authorized Signatory,
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 10, padding: 5 }}>
            Amalgamate Technology
          </Text>
        </View>
      </Page>
    </Document>
  );
};
export default PDFDocument;
