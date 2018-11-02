import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import style from './style.css'

const mapStateToProps = (state) => {
    //TODO перенести в селекторы
    const temperature = _.get(state, ['sensors', 'sensor_data', 'temperature'], {})
    const humidity = _.get(state, ['sensors', 'sensor_data', 'humidity'], {})

    return {
        temperatureValue: temperature.value,
        temperatureStatus: temperature.status,
        humidityValue: humidity.value,
        humidityStatus: humidity.status,
    }
}

export const SensorData =connect(mapStateToProps, null)(
    ({temperatureValue, temperatureStatus, humidityValue, humidityStatus }) => {
    return (
        <div className={style.container}>
            <div className={style.sensors}>
                <div className={style.sensorsItem}>
                    <div className={style.tempIcon}></div>
                    <div className={style.sensorsValue}>{`${temperatureValue}°C`}</div>
                </div>
                <div className={style.sensorsItem}>
                    <div className={style.humIcon}></div>
                    <div className={style.sensorsValue}>{`${humidityValue}%`}</div>
                </div>
            </div>
            <div className={style.actions}>
                <label className={style.action}>
                    <input className={style.actionInput} type="radio" name="segmented" value="1" />
                    <span className={style.actionValue}>Весь дом</span>
                </label>
                <label className={style.action}>
                    <input className={style.actionInput} type="radio" name="segmented" value="2" />
                    <span className={style.actionValue}>Детская</span>
                </label>
                <label className={style.action}>
                    <input className={style.actionInput} type="radio" name="segmented" value="3" />
                    <span className={style.actionValue}>Спальня</span>
                </label>
            </div>
        </div>
    )
}
)
