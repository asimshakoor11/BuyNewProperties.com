import React from "react";
// import logo from '../../../public/images/global/weblogowhite.png';
import logo from '/images/pages/printpdfs/weblogo.png'
import logodark from '/images/pages/printpdfs/weblogodark.png'
import section from '/images/pages/printpdfs/section.png'
import mainpagecurve from '/images/pages/printpdfs/mainpagecurve.png'
import headercurve from '/images/pages/printpdfs/headercurve.png'
import lastpagecurve from '/images/pages/printpdfs/lastpagecurve.png'
import readmoreimg1 from '/images/pages/printpdfs/readmoreimg1.png'
import readmoreimg2 from '/images/pages/printpdfs/readmoreimg2.png'
import locationmarkerblack from '/images/icons/locationmarkerblack.png'
import phonecall from '/images/icons/phone-call.png'
import envelope from '/images/icons/envelope.png'
import pictureblack from '/images/icons/pictureblack.png'
import { Page, Text, Image, Document, StyleSheet, View, Svg } from "@react-pdf/renderer";

import { Font } from '@react-pdf/renderer';
import BebasNeuePro from '/font/BebasNeuePro-SemiExpBold.ttf';

Font.register({
    family: 'BebasNeuePro',
    src: BebasNeuePro,
    fontWeight: 700,
})

// Define styles
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
    },
    containerheadermain: {
        position: 'relative',
        zIndex: 50,
        maxHeight: '643px',
        overflow: 'hidden'
    },
    imageheadermain: {
        height: '240px',
    },
    headerSection: {
        paddingVertical: 20,
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
        width: '200px',
    },
    mainTitle: {
        fontSize: 18,
        // fontWeight: 'normal',
        marginBottom: 5,
        fontFamily: 'BebasNeuePro'
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
        position: 'relative',
        top: '-40px',
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
        fontWeight: 'extrabold',
    },
    subtitle: {
        fontSize: 8,
        fontWeight: 'semibold',
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
        fontWeight: 'extrabold',
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
        fontWeight: 'extrabold',
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
        fontWeight: 'bold',
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
        fontWeight: "bold",
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
        border: '1 solid #000',
        padding: 20,
        borderRadius: 5,
        margin: 20,
    },
    lastpagesubHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    lastpagetext: {
        marginBottom: 10,
        fontSize: 12
    },
    lastpagelist: {
        marginLeft: 20,
        marginBottom: 10,
    },
    lastpagelistItem: {
        marginBottom: 5,
        fontSize: 12
    },
    lastpagecontactInfo: {
        marginTop: 10,
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
    }
});


const images = [
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',
    '/images/pages/printpdfs/section.png',

];


// Define PDF document
const BrochurePDF = () => {
    const renderImagePages = () => {
        let pages = [];

        // First four images (2 per page)
        for (let i = 0; i < 4 && i < images.length; i += 2) {
            pages.push(
                <Page key={`first-four-${i}`}>
                    <View>
                        <Image
                            style={styles.headerimage}
                            src={headercurve} // Replace with the actual logo URL
                        />
                    </View>

                    <View style={{ flexDirection: 'column', height: '85%', gap: 10, paddingHorizontal: 10, }}>
                        <View style={{ width: '100%', height: '40%', borderRadius: 10 }}>
                            <Image style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} src={images[i]} />
                        </View>
                        {images[i + 1] && (
                            <View style={{ width: '100%', height: '40%', borderRadius: 10 }}>
                                <Image style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} src={images[i + 1]} />
                            </View>
                        )}
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
            );
        }

        // Remaining images (8 per page)
        let remainingImages = images.slice(4);
        for (let i = 0; i < remainingImages.length; i += 8) {
            pages.push(
                <Page style={styles.page} key={`more-images-${i}`}>
                    <View>
                        <Image
                            style={styles.headerimage}
                            src={headercurve} // Replace with the actual logo URL
                        />
                    </View>

                    <View style={styles.imagessection}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, }}>
                            {remainingImages.slice(i, i + 8).map((img, index) => (
                                <Image style={[styles.imagesimage, { width: '48%', marginBottom: 10, borderRadius: 10 }]} src={img} key={index} />
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
                        src={mainpagecurve} // Replace with the actual logo URL
                    />
                    <View style={styles.imagesection}>
                        <Image
                            style={styles.imagesectionimage}
                            src={section} // Replace with the actual logo URL
                        />
                    </View>
                    <View style={styles.headerSection}>
                        <Image
                            style={styles.companyLogo}
                            src={logo} // Replace with the actual logo URL
                        />
                        <Text style={styles.mainTitle}>New Development In Estella</Text>
                        <Text style={styles.location}>Lisbon, Portugal</Text>
                        <Text style={styles.priceRange}>€1,200,000 to €3,500,000</Text>
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
                <View style={styles.container1}>
                    <Text style={styles.heading1}>
                        Spectacular Apartment With Ocean View In Cascais, Lisbon
                    </Text>
                    <Text style={styles.heading1text}>
                        Discover the peak of Algarve living at this remarkable estate near the desirable ‘Golden Triangle’. Positioned on a quiet road just outside the luxury resort of Quinta do Lago, this property offers a perfect mix of calm and convenience.
                    </Text>
                    <Text style={styles.heading1text}>
                        Beyond its rich amenities, this estate stands as a great investment opportunity in the thriving Algarve real estate scene. With its prime spot in the ‘Golden Triangle’, the demand for exclusive properties is always high. The property’s unique setup, with multiple living units, presents flexible income-generating options. Imagine splitting the estate into separate plots, catering to various market needs—small hotels, group stays, or high-end holiday rentals.
                    </Text>
                    <Text style={styles.heading1text}>
                        Travel is made easy with Faro International Airport just 14km away, ensuring quick access for both residents and visitors. Plus, the Loulé Train Station, just a short 6.3km from the estate, offers a handy transportation hub, improving connectivity to nearby areas
                    </Text>
                    <Text style={styles.heading1text}>
                        For those seeking sun-kissed shores, the nearby Vale do Garrão Beach, just 5km from the estate, invites with its soft sands and clear waters. Nature lovers will find peace at the Ria Formosa Nature Reserve, also 5km away, where protected beauty and tranquility await exploration.
                    </Text>
                    <Text style={styles.heading1text}>
                        Discover the peak of Algarve living at this remarkable estate nea...
                    </Text>
                </View>

                <View style={styles.containeroptions}>
                    <View style={styles.contentoptions}>
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
                </View>

                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'extrabold', marginBottom: 20, paddingLeft: 10 }}>Read More About</Text>

                    <View style={styles.readmorecontainer}>
                        <View style={styles.readmoresection}>
                            <Image style={styles.readmoreimage} src={readmoreimg1} />
                            <View style={styles.readmoretextContainer}>
                                <Text style={styles.readmoretitle}>Property Buying Guide in Lisbon, Portugal</Text>
                                <Text style={styles.readmoredescription}>For some people, purchasing a property is as straightforward as stating: "I'm going to buy a house"....</Text>
                            </View>
                        </View>

                        <View style={styles.readmoresection}>
                            <Image style={styles.readmoreimage} src={readmoreimg2} />
                            <View style={styles.readmoretextContainer}>
                                <Text style={styles.readmoretitle}>Calculate Taxes & Costs</Text>
                                <Text style={styles.readmoredescription}>The taxes you need to be aware of are IMT and Stamp Duty when purchasing a property...</Text>
                            </View>
                        </View>

                        <View style={styles.readmoresection}>
                            <Image style={styles.readmoreimage} src={readmoreimg1} />
                            <View style={styles.readmoretextContainer}>
                                <Text style={styles.readmoretitle}>Property Buying Guide in Portugal</Text>
                                <Text style={styles.readmoredescription}>Guide for buying property in Portugal, including steps, tips, and important considerations...</Text>
                            </View>
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
                    <Text style={{ textAlign: 'center', fontWeight: 'heavy' }}>Available Apartments</Text>


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

                <View style={{position: 'relative' , top: 2, width: '101%'}}>
                    <Image src={lastpagecurve} />
                </View>

                <View style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#002038', color: 'white', height: '300px' }}>
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

export default BrochurePDF;
