import React from "react";
// import logo from '../../../public/images/global/weblogowhite.png';
import logo from '/images/pages/printpdfs/weblogo.png'
import logodark from '/images/pages/printpdfs/weblogodark.png'
import section from '/images/pages/printpdfs/section.png'
import headercurve from '/images/pages/printpdfs/singleunitheadercurve.png'
import headerbigcurve from '/images/pages/printpdfs/signleunitheadercurvebig.png'
import lastpagecurve from '/images/pages/printpdfs/singleunitlastpagecurve.png'
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
        width: '101%',
        top: '-3px',
        left: '-1px',
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
        backgroundColor: "#003421",
        color: "white",
        padding: 15,
        textAlign: "center",
    },
    footerText: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 5,
    },
    disclaimer: {
        fontSize: 6,
        marginTop: 5,
    },
    row: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerimage: {
        position: 'relative',
        width: '101%',
        top: '-2px',
        left: '-2px',
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
        padding: '8px',
        backgroundColor: '#f7f7f7f7',
        borderRadius: '5px'
    },
    icon: {
        height: '10px'
    },
    icontext: {
        fontSize: '10px',
        fontWeight: 600
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
        textDecoration: 'underline'
    },

    cardcontainer: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
        marginHorizontal: 10,
        height: '220px'
    },
    cardimagecontainer: {
        width: '50%',
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
        justifyContent: 'space-between',
        border: '1px solid black',
        borderLeft: 'none',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    cardtitle: {
        fontSize: 11,
        fontWeight: 600,
    },
    cardsubtitle: {
        fontSize: 14,
        fontWeight: 600,
    },
    carddescription: {
        fontSize: 8,
    },
    cardbuttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
    },

    cardprice: {
        fontSize: 12,
        fontWeight: 700,
        textAlign: 'left',
    }
});

const images = [
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',

];

// Define PDF document
const PriceListPDF = () => {

    const renderImagePages = () => {
        let pages = [];

        // First four images (2 per page)
        for (let i = 0; i < 4 && i < images.length; i += 2) {
            pages.push(
                <Page key={`first-four-${i}`} style={styles.body}>
                    <View>
                        <Image
                            style={styles.headerimage}
                            src={headercurve} // Replace with the actual logo URL
                        />
                    </View>

                    <View style={{ flexDirection: 'column', height: '85%', gap: 10, paddingHorizontal: 10, }}>
                        <View style={{ width: '100%', height: '46.5%', borderRadius: 10 }}>
                            <Image style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} src={images[i]} />
                        </View>
                        {images[i + 1] && (
                            <View style={{ width: '100%', height: '46%', borderRadius: 10 }}>
                                <Image style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} src={images[i + 1]} />
                            </View>
                        )}
                    </View>

                    <View style={styles.containerfooter}>
                        <View style={styles.footer}>
                            <View style={styles.row}>

                                <Text style={{ ...styles.footerText, fontWeight: 600 }}>info@buy.re</Text>

                                <Text style={{ ...styles.footerText, fontWeight: 600 }}>www.buydevelopments.com</Text>
                            </View>
                            <Text style={styles.disclaimer}>
                                The information provided in this property appeal is for general informational purposes only. While we strive to ensure accuracy, completeness, and timeliness, we cannot guarantee the accuracy of property details, pricing, or availability. The displayed images and floor plans are for illustrative purposes only and may not represent the actual property or current condition.
                            </Text>
                        </View>
                    </View>
                </Page>
            );
        }

        // Remaining images (8 per page)
        let remainingImages = images.slice(4);
        for (let i = 0; i < remainingImages.length; i += 8) {
            pages.push(
                <Page style={styles.body} key={`more-images-${i}`}>
                    <View>
                        <Image
                            style={styles.headerimage}
                            src={headercurve} // Replace with the actual logo URL
                        />
                    </View>

                    <View style={styles.imagessection}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, }}>
                            {remainingImages.slice(i, i + 8).map((img, index) => (
                                <View style={{ width: '49%', height: 162, borderRadius: 10 }}>
                                    <Image style={[styles.imagesimage, { width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }]} src={img} key={index} />

                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.containerfooter}>
                        <View style={styles.footer}>
                            <View style={styles.row}>

                                <Text style={{ ...styles.footerText, fontWeight: 600 }}>info@buy.re</Text>

                                <Text style={{ ...styles.footerText, fontWeight: 600 }}>www.buydevelopments.com</Text>
                            </View>
                            <Text style={styles.disclaimer}>
                                The information provided in this property appeal is for general informational purposes only. While we strive to ensure accuracy, completeness, and timeliness, we cannot guarantee the accuracy of property details, pricing, or availability. The displayed images and floor plans are for illustrative purposes only and may not represent the actual property or current condition.
                            </Text>
                        </View>
                    </View>
                </Page>
            );
        }

        return pages;
    };

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
                    <Text style={{ ...styles.lastpagesubHeader, textAlign: 'center', fontWeight: 700, fontSize: '18px', }}>FLoor Plan</Text>
                </View>

                <View style={{...styles.lastpagecard, margin: 8}}>
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
                    <Text style={{ ...styles.lastpagetext, fontWeight: 'bold' }}>
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

            {renderImagePages()}




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
                    <Text style={{ ...styles.lastpagetext, fontWeight: 'bold' }}>
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

                <View style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#003421', color: 'white', height: '300px' }}>
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
