import React from "react";
// import logo from '../../../public/images/global/weblogowhite.png';
import logo from '/images/pages/printpdfs/weblogo.png'
import logodark from '/images/pages/printpdfs/weblogodark.png'
import section from '/images/pages/printpdfs/section.png'
import mainpagecurve from '/images/pages/printpdfs/mainpagecurve.png'
import headercurve from '/images/pages/printpdfs/headercurve.png'
import headerbigcurve from '/images/pages/printpdfs/headerbigcurve.png'
import lastpagecurve from '/images/pages/printpdfs/lastpagecurve.png'
import readmoreimg1 from '/images/pages/printpdfs/readmoreimg1.png'
import readmoreimg2 from '/images/pages/printpdfs/readmoreimg2.png'
import locationmarkerblack from '/images/icons/locationmarkerblack.png'
import phonecall from '/images/icons/phone-call.png'
import envelope from '/images/icons/envelope.png'
import pictureblack from '/images/icons/pictureblack.png'
import { Page, Text, Image, Document, StyleSheet, View, Svg } from "@react-pdf/renderer";


import { Font } from '@react-pdf/renderer';
import popExtraBold from '/Poppins/Poppins-ExtraBold.ttf';
import popBold from '/Poppins/Poppins-Bold.ttf';
import popSemiBold from '/Poppins/Poppins-SemiBold.ttf';
import popRegular from '/Poppins/Poppins-Regular.ttf';
import popLight from '/Poppins/Poppins-Light.ttf';

Font.register({
    family: 'Poppins',
    fonts: [
        { src: popExtraBold, fontWeight: 800 },
        { src: popBold, fontWeight: 700 },
        { src: popSemiBold, fontWeight: 600 },
        { src: popRegular, fontWeight: 400 },
        { src: popLight, fontWeight: 300 },
    ],
})


// Define styles
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        fontFamily: 'Poppins',
        fontWeight: 400
    },
    containerheadermain: {
        position: 'relative',
        zIndex: 50,
    },
    imageheadermain: {
        width: '101%'
    },
    headerSection: {
        paddingVertical: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0'
    },
    companyLogo: {
        marginBottom: 10,
        width: '180px',
    },
    mainTitle: {
        fontSize: 18,
        marginBottom: 5,
        // fontFamily: 'BebasNeuePro'
    },
    location: {
        fontSize: 14,
        marginBottom: 10,
        fontStyle: 'normal',
        fontWeight: 700
    },
    priceRange: {
        fontSize: 16,
        fontWeight: 600,
    },
    imagesection: {
        position: 'relative',
        top: '-80px',
        zIndex: 30,
    },

    imagesectionimage: {
    },

    container: {
        width: '97%',
        marginVertical: 10,
        marginHorizontal: 10,
        border: '1px solid black',
        borderRadius: '10px',

    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: '10px'
    },
    card: {
        color: '#002038',
        width: '90px',
        marginVertical: '5px',
        textAlign: 'center',
    },
    title: {
        fontSize: 10,
        fontWeight: 700,
    },
    subtitle: {
        fontSize: 8,
        fontWeight: 600,
    },

    containerfooter: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        // position: 'relative',
        // top: '-80px',
    },
    footer: {
        backgroundColor: "#002038",
        color: "white",
        padding: 20,
        textAlign: "center",
    },
    footerText: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 5,
    },
    disclaimer: {
        fontSize: 8,
        marginTop: 10,
    },
    row: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerimage: {
        width: '100%',
    },
    container1: {
        paddingHorizontal: 10
    },

    heading1: {
        fontSize: '16px',
        fontWeight: 700,
        marginBottom: '10px'
    },
    heading1text: {
        fontSize: '14px',
        marginVertical: '5px'
    },
    containeroptions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '10px',
        gap: '10px',
        paddingHorizontal: 10
    },
    contentoptions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '20px',
        gap: '10px',
        borderBottom: '1px solid gray',
        width: '200px'
    },
    iconcontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        padding: '10px',
        backgroundColor: '#f7f7f7f7',
        borderRadius: '10px'
    },
    icon: {
        width: '10px'
    },
    icontext: {
        fontSize: '12px'
    },
    readmorecontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10
    },
    readmoresection: {
        display: 'flex',
        flexDirection: 'column',
        width: '32%'
    },
    readmoreimage: {
        width: '100%',
        marginBottom: 5,

    },
    readmoretextContainer: {
        flexDirection: 'column',
        flexGrow: 1,
    },
    readmoretitle: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 5,
    },
    readmoredescription: {
        fontSize: 10,
    },
    table: {
        display: "table",
        width: "100%",
        marginVertical: 20
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
    },
    tableColHeader: {
        width: "12.28%",
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 10,
    },
    tableCol: {
        width: "12.28%",
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',

        paddingVertical: 10,
    },
    tableCellHeader: {
        fontSize: 10,
        fontWeight: 700,
        textAlign: 'center'
    },
    tableCell: {
        fontSize: 10,
        textAlign: 'center'

    },
    imagessection: {
        marginBottom: 10,
        paddingHorizontal: 10
    },
    imagesimage: {
        width: '100%',
        height: 150,
        marginBottom: 10,
    },
    imagesrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagescolumn: {
        flexDirection: 'column',
        width: '48%',
    },
    lastpagecard: {
        border: '1px solid #000',
        padding: 20,
        borderRadius: 5,
        margin: 10,
    },
    lastpagesubHeader: {
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 6,
    },
    lastpagetext: {
        marginBottom: 5,
        fontSize: 12
    },
    lastpagelist: {
        marginLeft: 20,
        marginBottom: 5,
    },
    lastpagelistItem: {
        marginBottom: 5,
        fontSize: 12
    },
    lastpagecontactInfo: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    lastpagecontactItem: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        marginBottom: 5,
    },
    lastpagecontactText: {
        marginLeft: 5,
        fontSize: 12
    },
    linkscontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    linksitems: {
        fontSize: 12,
        textDecoration: 'underline',
        fontWeight: 600
    },
    cardcontainer: {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid black',
        borderRadius: 10,
        marginHorizontal: 10,
        height: '180px',

    },
    cardimagecontainer: {
        width: '50%',
        height: '178px',
        borderRadius: 10,

    },
    cardimage: {
        width: '100%',
        objectFit: 'cover',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    cardtextContainer: {
        padding: 10,
        width: '50%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    cardtitle: {
        fontSize: 12,
        fontWeight: 600,
    },
    cardsubtitle: {
        fontSize: 14,
        marginVertical: 5,
        fontWeight: 600,

    },
    carddescription: {
        fontSize: 8,
        marginVertical: 5,
    },
    cardbuttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        marginVertical: 10,
    },

    cardprice: {
        fontSize: 12,
        fontWeight: 700,
        textAlign: 'left',
        marginTop: 10,
    }
});


// Define PDF document
const PriceListPDF = () => {

    return (
        <Document>
            <Page size="A4" style={styles.body}>
                {/* Header Section */}

                <View style={styles.containerheadermain}>
                    <Image style={styles.imageheadermain}
                        src={headerbigcurve} // Replace with the actual logo URL
                    />
                    <View style={styles.headerSection}>
                        <Image
                            style={styles.companyLogo}
                            src={logo} // Replace with the actual logo URL
                        />
                    </View>
                </View>

                <View >
                    <Text style={{ ...styles.lastpagesubHeader, textAlign: 'center', fontSize: 16 }}>PriceList</Text>
                </View>

                <View style={styles.lastpagecard}>
                    <Text style={styles.lastpagetext}>
                        Hi [Name],
                    </Text>

                    <Text style={styles.lastpagetext}>
                        Please find attached the latest price list for our project [Reference ID] - [Name of the development]
                    </Text>
                    <Text style={styles.lastpagetext}>
                        If you would like more information about individual units or need to check the availability of a specific unit that matches your criteria, we are here to help.
                    </Text>
                    <Text style={styles.lastpagetext}>
                        Feel free to reach out with any questions you may have.
                    </Text>
                    <Text style={styles.lastpagetext}>
                        Kind regards,
                    </Text>
                    <Text style={{ ...styles.lastpagetext, fontWeight: 700 }}>
                        The BuyDevelopments.com Team
                    </Text>
                    <Text style={{ ...styles.lastpagetext, color: '#828282' }}>
                        Av. da Liberdade 110, 1250-140 Lisboa, Portugal
                    </Text>
                    <View style={styles.lastpagecontactInfo}>
                        <View style={styles.lastpagecontactItem}>
                            <Image style={styles.icon} src={envelope} />
                            <Text style={styles.lastpagecontactText}>info@buy.re</Text>
                        </View>
                        <View style={styles.lastpagecontactItem}>
                            <Image style={styles.icon} src={phonecall} />

                            <Text style={styles.lastpagecontactText}>+351 919 931 440</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardcontainer}>
                    <View style={styles.cardimagecontainer}>
                        <Image style={styles.cardimage} src={section} />
                    </View>
                    <View style={styles.cardtextContainer}>
                        <Text style={styles.cardtitle}>Lisbon, Portugal</Text>
                        <Text style={styles.cardsubtitle}>Spectacular Development With Ocean Views In Cascais, Lisbon</Text>
                        <Text style={styles.carddescription}>
                            Discover the peak of Algarve living at this remarkable estate near the desirable 'Golden Triangle'.
                            Positioned on a quiet road just outside the luxury resort of Quinta do Lago, this property offers a perfect mix
                            of calm and convenience...
                        </Text>
                        <View style={styles.cardbuttonContainer}>
                            <View style={styles.iconcontainer}>
                                <Image style={styles.icon}
                                    src={locationmarkerblack} />
                                <Text style={styles.icontext} >Photos</Text>
                            </View>
                            <View style={styles.iconcontainer}>
                                <Image style={styles.icon}
                                    src={pictureblack} />
                                <Text style={styles.icontext}>Location</Text>
                            </View>

                        </View>

                        <Text style={styles.cardprice}>€1,200,000 to €3,500,000</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.grid}>
                        <View style={styles.card}>
                            <Text style={styles.title}>N1001</Text>
                            <Text style={styles.subtitle}>Reference ID</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Apartment</Text>
                            <Text style={styles.subtitle}>Type</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>2</Text>
                            <Text style={styles.subtitle}>Bed Rooms</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>3</Text>
                            <Text style={styles.subtitle}>Bath Rooms</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>103m²</Text>
                            <Text style={styles.subtitle}>Living area</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>130m²</Text>
                            <Text style={styles.subtitle}>Exterior area</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>5</Text>
                            <Text style={styles.subtitle}>Floor</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>2</Text>
                            <Text style={styles.subtitle}>Parking</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>10 Years</Text>
                            <Text style={styles.subtitle}>Construction Warranty</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>-</Text>
                            <Text style={styles.subtitle}>Energy Rating</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Save €3,000</Text>
                            <Text style={styles.subtitle}>On Legal Fees</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Q3 2024</Text>
                            <Text style={styles.subtitle}>Completion Time</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.containerfooter}>
                    <View style={styles.footer}>
                        <View style={styles.row}>

                            <Text style={styles.footerText}>info@buy.re</Text>

                            <Text style={styles.footerText}>www.buydevelopments.com</Text>
                        </View>
                        <Text style={styles.disclaimer}>
                            The information provided in this property appeal is for general informational purposes only. While we strive to ensure accuracy, completeness, and timeliness, we cannot guarantee the accuracy of property details, pricing, or availability. The displayed images and floor plans are for illustrative purposes only and may not represent the actual property or current condition.
                        </Text>
                    </View>
                </View>
            </Page>

            <Page size="A4" style={styles.body}>
                <View>
                    <Image
                        style={styles.headerimage}
                        src={headercurve} // Replace with the actual logo URL
                    />
                </View>

                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 700 }}>Available Apartments</Text>


                    <View style={styles.table}>
                        {/* Table Header */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Property Type</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Beds</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Interior</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Terrace</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Floor/Plot</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Unit</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Parking</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Price</Text>
                            </View>
                        </View>

                        {/* Table Rows */}
                        {[...Array(7)].map((_, index) => (
                            <View style={styles.tableRow} key={index}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Apartment</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>3</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>103m²</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>23m²</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>G/F</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>B25</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>1</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>€1,500,000</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.containerfooter}>
                    <View style={styles.footer}>
                        <View style={styles.row}>

                            <Text style={styles.footerText}>info@buy.re</Text>

                            <Text style={styles.footerText}>www.buydevelopments.com</Text>
                        </View>
                        <Text style={styles.disclaimer}>
                            The information provided in this property appeal is for general informational purposes only. While we strive to ensure accuracy, completeness, and timeliness, we cannot guarantee the accuracy of property details, pricing, or availability. The displayed images and floor plans are for illustrative purposes only and may not represent the actual property or current condition.
                        </Text>
                    </View>
                </View>

            </Page>

            <Page size="A4" style={{ ...styles.body, backgroundColor: '#f7f7f7' }}>
                <View style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <Image
                        style={styles.companyLogo}
                        src={logodark} // Replace with the actual logo URL
                    />
                </View>

                <View style={styles.lastpagecard}>
                    <Text style={styles.lastpagesubHeader}>Looking for more information?</Text>
                    <Text style={styles.lastpagetext}>
                        We are your local Agents and can help you with all the details and questions you may need about this project. Examples:
                    </Text>
                    <View style={styles.lastpagelist}>
                        <Text style={styles.lastpagelistItem}>• Orientation - Like how the sun rises and sets on the terrace</Text>
                        <Text style={styles.lastpagelistItem}>• Views - What units have the best view</Text>
                        <Text style={styles.lastpagelistItem}>• Floor plans - Provide specific floor plans for the units you may be interested in</Text>
                        <Text style={styles.lastpagelistItem}>• Present amenities and possibilities in the community etc.</Text>
                    </View>
                    <Text style={styles.lastpagetext}>
                        Please reach out to us for any questions you may have.
                    </Text>
                    <Text style={styles.lastpagetext}>
                        All the best,
                    </Text>
                    <Text style={{ ...styles.lastpagetext, fontWeight: 700 }}>
                        The BuyDevelopments.com Team
                    </Text>
                    <Text style={{ ...styles.lastpagetext, color: '#828282' }}>
                        Av. da Liberdade 110, 1250-140 Lisboa, Portugal
                    </Text>
                    <View style={styles.lastpagecontactInfo}>
                        <View style={styles.lastpagecontactItem}>
                            <Image style={styles.icon} src={envelope} />
                            <Text style={styles.lastpagecontactText}>info@buy.re</Text>
                        </View>
                        <View style={styles.lastpagecontactItem}>
                            <Image style={styles.icon} src={phonecall} />

                            <Text style={styles.lastpagecontactText}>+351 919 931 440</Text>
                        </View>
                    </View>
                </View>

                <View style={{ position: 'relative', top: 2, width: '101%' }}>
                    <Image src={lastpagecurve} />
                </View>

                <View style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#002038', color: 'white', height: '250px' }}>
                    <Image
                        style={styles.companyLogo}
                        src={logo} // Replace with the actual logo URL
                    />

                    <View style={styles.linkscontainer}>
                        <Text style={styles.linksitems}>New Developments</Text>
                        <Text style={styles.linksitems}>About</Text>
                        <Text style={styles.linksitems}>Guide</Text>
                        <Text style={styles.linksitems}>Contact</Text>
                    </View>
                </View>

                <View style={styles.containerfooter}>
                    <View style={styles.footer}>
                        <View style={styles.row}>

                            <Text style={styles.footerText}>info@buy.re</Text>

                            <Text style={styles.footerText}>www.buydevelopments.com</Text>
                        </View>
                        <Text style={styles.disclaimer}>
                            The information provided in this property appeal is for general informational purposes only. While we strive to ensure accuracy, completeness, and timeliness, we cannot guarantee the accuracy of property details, pricing, or availability. The displayed images and floor plans are for illustrative purposes only and may not represent the actual property or current condition.
                        </Text>
                    </View>
                </View>

            </Page>
        </Document>
    );
};

export default PriceListPDF;
