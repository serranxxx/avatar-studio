import React, { useEffect, useState } from 'react'
import { beards, faces, glasses, hairs, hats } from './hooks/body_parts'
import { Button } from 'antd'

export const BodyAvatar = (props) => {

    return (

        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '100%',
            // border: '1px solid green'

        }}>
            <svg
                style={{
                    fill: `${props.clothe}`, width: '80%',
                    transition: 'all 0.45s ease-in-out',
                    // marginBottom: '100px'
                    // padding: '5%', marginTop: '0vh'
                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.5 118">
                <path class="cls-1" d="M138.5,0h-82L0,118H197.5Z" />


            </svg>

        </div>

    )
}

export const HeadAvatar = (props) => {

    return (
        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '100%', position: 'relative',
            transition: 'all 0.45s ease-in-out',
            // height:'100%',
            // marginBottom: '-7%',
            // border: '1px solid blue'

        }}>
            <svg
                style={{
                    fill: `${props.skin}`, width: '80%',
                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281 201.5">
                <path class="cls-1" d="M256.5,63.5c-.67,0-1.34,0-2,.09V49a49,49,0,0,0-49-49H77A49,49,0,0,0,28,49V62.75a25.18,25.18,0,0,0-3.5-.25,24.5,24.5,0,0,0,0,49,25.18,25.18,0,0,0,3.5-.25v41.29a49,49,0,0,0,49,49H205.54a49,49,0,0,0,49-49V112.41c.66.06,1.33.09,2,.09a24.5,24.5,0,0,0,0-49Z" />

            </svg >
            
            <BeardAvatar beard={props.beard} color={props.beardColor} />
            <img style={{
                position: 'absolute',
                width: '50%', height: '50%'
            }}
                src={props.face} />


            <HairAvatar hair={props.hair} color={props.color} />
            <GlassesAvatar glasses={props.glasses} />
            <HatsAvatar hat={props.hat} />
        </div>

    )
}

export const HairAvatar = (props) => {
    return (
        <div
            // className='hair-style'
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'absolute', width: '100%',
                transition: 'all 0.45s ease-in-out',
                // border: '1px solid red',
                height: '100%',
                top: '-40px'

            }}>
            <svg
                style={{
                    fill: `${props.color}`,
                    width: '100%'
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352.83 278">
                {
                    props.hair === hairs.hair_2 ? <path class="cls-2" d="M62.83,163.43Q63.37,127,63.9,90.64c.72-4.16,3.87-19.53,17.13-27.83,9-5.62,18.53-5.46,24.62-5.35,16.34.28,19.06,7.72,32.11,6.42,9.27-.92,15.89-5.37,23-10.17,13.35-9,14.14-15.37,23.55-22.48,15.77-11.91,35.54-10.55,41.21-10.17,21.39,1.47,42.29,13,53.52,31.05a65.75,65.75,0,0,1,9.63,31q1.08,40.68,2.14,81.35c-9.88-2.39-14.34-6.7-16.59-10.17-6.2-9.56.91-18.11-5.35-34.25a42.9,42.9,0,0,0-9.63-15,40.86,40.86,0,0,0-16.06-9.63H113.68c-5.19,1.39-15.68,5.11-22.48,15-4.5,6.53-5.77,13.4-6.42,17.13-2.22,12.65,1.87,17-1.07,23.55C81.77,155.4,76.81,160.62,62.83,163.43Z" />
                        : props.hair === hairs.hair_1 ? <path class="cls-2" d="M62.85,134.5a55.22,55.22,0,0,1,6.39-32.35c.5-.9,11.16-19.35,31.93-24.53a44.84,44.84,0,0,1,6.39-1.12l140.5,1.12A42.19,42.19,0,0,1,260.3,80.4c2.88,1.14,18.68,7.72,25.54,25.66A47.63,47.63,0,0,1,288,131.71h-8.51c.55-4.92,2.19-23.9-9.58-35.69A31,31,0,0,0,256,88.21c-27-7.73-45.51,9.79-76.64,10-33.34.27-49.05-19.51-78.76-11.15-5.22,1.47-11.7,4-17,10-10.89,12.24-9.12,29.89-8.52,34.57Z" />
                            // : props.hair === hairs.hair_3 ? <path class="cls-2" d="M178.11,75.2a34,34,0,0,1-6.28-17.88,42.24,42.24,0,0,1,1.1-11.08A21.19,21.19,0,0,0,184,55.77c7.88,2.78,19.22,1,24.71-7.63,4.66-7.35,3.76-17.66-2.05-23.47-8.64-8.64-22.55-2.76-26.6-.75a24.8,24.8,0,0,0-3.52,2.1,25.42,25.42,0,0,1,.67-4c1.92-7.64,7.38-12.51,10.46-14.74A4,4,0,1,0,183,.76C179,3.62,172,9.93,169.45,20a37.07,37.07,0,0,0-.57,14.6c-5.27,9.24-5.17,20.18-5,23.06A41.35,41.35,0,0,0,169.75,77h9A4.08,4.08,0,0,0,178.11,75.2Zm5.5-44.11c2-1,12.39-5.76,17.39-.76,3.16,3.16,3.6,9.35.95,13.53-3.44,5.44-11.16,5.83-15.29,4.37-4.62-1.63-7.77-6.38-9.26-12A17.57,17.57,0,0,1,183.61,31.09Z" />
                            : props.hair === hairs.hair_3 ? <path class="cls-2" d="M76.84,253.48a80.89,80.89,0,0,0-19.75,1C43.29,257,38.32,261.75,27,260.76c-3.49-.31-12.25-1.08-14.56-6.24-1.9-4.27,2.25-7.86,4.16-15.59,2.45-9.9-.91-18.64-3.12-25C10,204,6.85,203.35,3.56,195.79c-7.92-18.16-.35-37.95,1-41.58,6.74-17.64,15.81-15.91,23.91-33.27s1.16-23.42,6.23-41.58c9-32.19,40.79-49,46.78-52A96,96,0,0,1,199,52.34a74.14,74.14,0,0,1,39.5-17.68c4.32-.51,30.42-3.23,53,14.56,2.26,1.77,25.24,20.39,27,46.78.54,8-1,14.32,3.12,22.86,4.61,9.48,10.74,10.31,17.67,17.68,13,13.86,16.16,37.37,11.43,54.05-4.9,17.3-16,19.16-14.55,32.22,1.08,10,8.2,14.71,6.24,26-.37,2.09-1.45,8.3-6.24,11.44-5.43,3.55-12.62,1.18-16.63,0-9.11-2.68-22.46-5.29-41.58-5.2a51.19,51.19,0,0,0,6.23-11.44,50.44,50.44,0,0,0,3.12-12.47V187.47c1.54.22,12.71,1.6,20.79-6.24,8.26-8,10.15-22.54,2.08-32.22-6.56-7.87-18-10.51-28.06-6.24a37.93,37.93,0,0,0-15.6-31.18c.21,2.58.54,5.36,1,8.31a94.71,94.71,0,0,0,2.08,9.36A77.08,77.08,0,0,1,200,91.84a78.39,78.39,0,0,1-21.82,27c-21.57,16.91-45.57,16.93-53,16.64a41.22,41.22,0,0,0-6.24-23.91,38.65,38.65,0,0,1-11.43,19.75,39.49,39.49,0,0,1-19.75,9.35c-15.32,2.9-19.63-4.67-31.19-1-7.36,2.32-17.08,9-18.71,19.75-1.35,8.94,3.29,17.93,10.4,22.87a25.65,25.65,0,0,0,17.67,4.16v44.7a29.52,29.52,0,0,0,10.91,22.35Z" />
                                : <></>
                }
            </svg>
        </div>

    )
}

export const GlassesAvatar = (props) => {



    return (
        <div
            // className='hair-style'
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'absolute', width: '100%',
                transition: 'all 0.45s ease-in-out',
                // border: '1px solid red',
                height: '100%',
                top: '-10px'

            }}>

            <img style={{
                // position: 'absolute',
                width: '60%',
                // height: '50%'
            }}
                src={props.glasses} />

        </div>

    )
}

export const HatsAvatar = (props) => {



    return (
        <div
            // className='hair-style'
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'absolute', width: '100%',
                transition: 'all 0.45s ease-in-out',
                // border: '1px solid red',
                width: '100%',
                top: '-100px'

            }}>

            <img style={{
                // position: 'absolute',
                width: '90%',
                // height: '50%'
            }}
                src={props.hat} />

        </div>

    )
}

export const BeardAvatar = (props) => {



    return (
        <div
            // className='hair-style'
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'absolute', width: '100%',
                transition: 'all 0.45s ease-in-out',
                // border: '1px solid red',
                height: '100%',
                top: '90px', left: `${props.beard === beards.beard_2 ? '68px' : ''}`

            }}>
            <svg
                style={{
                    fill: `${props.color}`,
                    width: '80%'
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 245.52 117.5">
                {
                    props.beard === beards.beard_0 ? <></>
                        : props.beard === beards.beard_1 ? <path class="cls-1" d="M186.77,0H137.06a15.77,15.77,0,0,1-15.61,13.59A15.77,15.77,0,0,1,105.83,0H58.75a58.75,58.75,0,0,0,0,117.5h128a58.75,58.75,0,0,0,0-117.5Z" />
                            : props.beard === beards.beard_2 ? <path class="cls-1" d="M108.9,20.78,79.41,2.5A15.82,15.82,0,0,1,65.64,14.77,15.83,15.83,0,0,1,48.23.69c0-.23,0-.46,0-.69L15.47,14.56A26,26,0,0,0,2.26,49,26.77,26.77,0,0,0,37.6,62.53L60,52.59,81.68,66.06a26.05,26.05,0,0,0,35.87-8.41h0A26.78,26.78,0,0,0,108.9,20.78Z" />
                                : <></>
                }
                {/* <path class="cls-1" d="M186.77,0H137.06a15.77,15.77,0,0,1-15.61,13.59A15.77,15.77,0,0,1,105.83,0H58.75a58.75,58.75,0,0,0,0,117.5h128a58.75,58.75,0,0,0,0-117.5Z" /> */}
            </svg>

        </div>

    )
}


