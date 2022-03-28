import React from "react";
import styles from "./Elements.module.scss";



export const Elements = ({ results }) => {
    let display;
    if(results){
        display = results.map(element => {
            let { id, image, name, location, status } = element;
            return (
                <div key={id} className="col-4 mb-4 position-relative">
                    <div className={styles.elements}>
                        <img src={image} alt="" className={`${styles.image} img-fluid`} />
                        <div className={styles.content}>
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last location:</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        if(status === "Dead"){
                            return (
                                <div className={`${styles.badge} badge bg-danger`}>
                                    {status}
                                </div>
                            );
                        } else if(status === "Alive") {
                            return (
                                <div className={`${styles.badge} badge bg-success`}>
                                    {status}
                                </div>
                            );
                        } else {
                            return (
                                <div className={`${styles.badge} badge bg-secondary`}>
                                    {status}
                                </div>
                            );
                        }
                    })()}
                </div>
            );
        });
    } else {
        display = "No characters found.";
    }
    return <>{display}</>
}