import { Text, View, SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import styles from "./Report.style"
import { useSelector } from 'react-redux'
import { BarChart } from 'react-native-chart-kit';

const Report = () => {
    const { dietList } = useSelector(st => st.dietLists)
    console.log("gelen dietlist REPORT PAGE", dietList)
    const [consumedDiets, setConsumedDiets] = useState([]);
    const [dailyConsumedDiets, setDailyConsumedDiets] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    console.log("gelen consumedDiets REPORT PAGE", consumedDiets)

    console.log("gelen dailyConsumedDiets REPORT PAGE", dailyConsumedDiets)

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        const today = new Date();
        const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
        const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        const lastMonth = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
        const consumedDietData = [];
        const dailyConsumedDietData = [];

        Object.values(dietList).forEach(diet => {
            const dietDate = new Date(diet.date).getTime();
            if (dietDate >= yesterday.getTime() && dietDate < today.getTime()) {
                consumedDietData.push({
                    ...diet,
                    period: 'daily',
                });

                dailyConsumedDietData.push({
                    ...diet,
                    period: 'daily',
                    quantity: 1,
                });
            }

            if (dietDate >= lastWeek.getTime()) {
                consumedDietData.push({
                    ...diet,
                    period: 'weekly',
                });
            }
            if (dietDate >= lastMonth.getTime()) {
                consumedDietData.push({
                    ...diet,
                    period: 'monthly',
                });
            }

        })
        consumedDietData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setConsumedDiets(consumedDietData);
        setDailyConsumedDiets(dailyConsumedDietData);

    }, [])


    const consumeByPeriod = {
        daily: [],
        weekly: [],
        monthly: [],
    }

    consumeByPeriod["daily"]["salt"] = 123123
    console.log("salt", consumeByPeriod.daily.salt)

    consumedDiets.reduce((acc, consumeDiet) => {

        const { period, enerjikalori, karbonhidrat, seker, yag, protein } = consumeDiet
        const nutrients = { enerjikalori, karbonhidrat, seker, yag, protein }

        for (const [key, value] of Object.entries(nutrients)) {
            if (!acc[period][key]) {
                acc[period][key] = Number.parseInt(value);
            } else {
                acc[period][key] += Number.parseInt(value);
            }
        }
        console.log("acc", acc.monthly.karbonhidrat)
        return acc;

    }, consumeByPeriod)

    console.log("consumeByPeriodaily d karbonhidrat bakbakim", consumeByPeriod.daily.karbonhidrat)

    const weeklyData = {
        labels: ["Enerjikalori", "Karbonhidrat", "Şeker", "Yag", "Protein"],
        datasets: [{
            data: [
                consumeByPeriod.weekly.enerjikalori,
                consumeByPeriod.weekly.karbonhidrat,
                consumeByPeriod.weekly.seker,
                consumeByPeriod.weekly.yag,
                consumeByPeriod.weekly.protein
            ]

        }]

    }

    const monthlyData = {
        labels: ["Enerjikalori", "Karbonhidrat", "Şeker", "Yag", "Protein"],
        datasets: [{
            data: [
                consumeByPeriod.monthly.enerjikalori,
                consumeByPeriod.monthly.karbonhidrat,
                consumeByPeriod.monthly.seker,
                consumeByPeriod.monthly.yag,
                consumeByPeriod.monthly.protein
            ]

        }]
    }

    const chartConfig = {
        backgroundGradientFrom: '#008037',
        backgroundGradientTo: '#363636',
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    };

    const chartStyle = {
        marginVertical: 8,
        borderRadius: 10,
        margin: 10,
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 5 }}>
                <Text>Daily: {consumeByPeriod.daily.enerjikalori}</Text>
                <Text>Weekly: {consumeByPeriod.weekly.enerjikalori}</Text>
                <Text>Monthly: {consumeByPeriod.monthly.enerjikalori}</Text>
            </View>

            <View>

                <Text>Weekly</Text>
                <BarChart
                    data={weeklyData}
                    width={350}
                    height={200}
                    chartConfig={chartConfig}
                    style={chartStyle}
                />
                <Text>Monthly</Text>

                <BarChart
                    data={monthlyData}
                    width={350}
                    height={200}
                    chartConfig={chartConfig}
                    style={chartStyle}
                />


            </View>

        </ScrollView>
    )
}

export default Report
