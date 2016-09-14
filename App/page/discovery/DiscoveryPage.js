import React, {Component} from "react";
import {StyleSheet, View, Text, Image, ListView, TouchableOpacity} from "react-native";
import Swiper from "react-native-swiper";
import SGListView from 'react-native-sglistview';

const BANNER_IMGS = [
    require('../../image/banner/1.jpg'),
    require('../../image/banner/2.jpg'),
    require('../../image/banner/3.jpg'),
    require('../../image/banner/4.jpg')
];

class DiscoveryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            banners: []
        }
    }

    componentDidMount() {
        this.setState({
            banners: BANNER_IMGS
        });
    }

    render() {
        return (
            <View>
                <Swiper style={styles.wrapper} height={120} autoplay={true}>
                    {this.state.banners.map((item, key) => {
                        return (
                            <Image key={key} source={item} style={styles.bannerItem}/>
                        )
                    })}
                </Swiper>
                <View style={{
                    height: 50,
                    flexDirection: 'row',
                    backgroundColor: '#FFF'
                }}>
                    <View style={styles.shortcutItem}>
                        <Image style={styles.shortcutItemIcon} source={require("../../image/common/ic_recommend.png")}/>
                        <Text style={styles.shortcutItemText}>编辑推荐</Text>
                    </View>
                    <View style={styles.shortcutItem}>
                        <Image style={styles.shortcutItemIcon} source={require("../../image/common/ic_hot.png")}/>
                        <Text style={styles.shortcutItemText}>热门权益</Text>
                    </View>
                    <View style={styles.shortcutItem}>
                        <Image style={styles.shortcutItemIcon} source={require("../../image/common/ic_card.png")}/>
                        <Text style={styles.shortcutItemText}>收录银行卡</Text>
                    </View>
                </View>
                <SGListView
                    style={styles.recommendPromoList}
                    dataSource={this.getDataSource()}
                    initialListSize={1}
                    stickyHeaderIndices={[]}
                    onEndReachedThreshold={1}
                    scrollRenderAheadDistance={1}
                    pageSize={1}
                    renderRow={(item) =>
                        <View>
                            <Image style={styles.recommendPromoItemImage} source={item.image}/>
                            <Text style={styles.recommendPromoItemTitle}>{item.title}</Text>
                            <Text style={styles.recommendPromoItemSummary}>{item.summary}</Text>
                            {
                                ((recommendText) => {
                                    if (recommendText) {
                                        return (
                                            <View style={styles.recommendPromoItemTextWrapper}>
                                                <Text style={styles.recommendPromoItemText}>{recommendText}</Text>
                                            </View>
                                        )
                                    } else {
                                        return null;
                                    }
                                })(item.recommendText)
                            }
                            {
                                ((starred) => {
                                    var starredImg;
                                    if (!starred) {
                                        starredImg = require("../../image/common/ic_starred_not.png");
                                    } else {
                                        starredImg = require("../../image/common/ic_starred.png");
                                    }

                                    return (
                                        <Image style={styles.recommendPromoItemStarredIcon} source={starredImg}/>
                                    )
                                })(item.starred)
                            }
                        </View>
                    }
                />
            </View>
        );
    }

    getDataSource() {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
        //return ds.cloneWithRows(this.props.dataSource);
        return ds.cloneWithRows([
            {
                id: 1,
                image: require("../../image/promo/promo_sample.jpg"),
                title: '浦发美国运通白金卡“享乐荟”权益',
                summary: '月累计消费/分期2w-6w，星级酒店健身4次、随身wifi、观演抵用券羊毛',
                starred: true,
                recommendText: '编辑推荐'
            },
            {
                id: 2,
                image: require("../../image/promo/promo_sample.jpg"),
                title: 'Hello world',
                starred: false
            },
            {
                id: 3,
                image: require("../../image/promo/promo_sample.jpg"),
                title: 'Hello world'
            },
            {
                id: 4,
                image: require("../../image/promo/promo_sample.jpg"),
                title: 'Hello world'
            },
            {
                id: 5,
                image: require("../../image/promo/promo_sample.jpg"),
                title: 'Hello world'
            },
        ]);
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    bannerItem: {
        height: 120,
        resizeMode: 'stretch'
    },
    shortcutItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shortcutItemIcon: {
        width: 20,
        height: 20
    },
    shortcutItemText: {
        fontSize: 12
    },
    recommendPromoList: {
        flex: 1
    },
    recommendPromoItemImage: {
        height: 140,
        resizeMode: 'stretch'
    },
    recommendPromoItemTitle: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 14,
        fontWeight: 'bold'
    },
    recommendPromoItemSummary: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 12,
        color: '#666'
    },
    recommendPromoItemTextWrapper: {
        position: 'absolute',
        left: 0,
        top: 10,
        backgroundColor: '#333',
        width: 100,
        height: 25,
        justifyContent: 'center',
        opacity: 0.7
    },
    recommendPromoItemText: {
        paddingLeft: 20,
        fontSize: 14,
        color: '#EEE'
    },
    recommendPromoItemStarredIcon: {
        height: 16,
        width: 16,
        position: 'absolute',
        right: 10,
        top: 10
    }
})

module.exports = DiscoveryPage;