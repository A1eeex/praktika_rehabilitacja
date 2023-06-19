"use client";
import React from 'react';
import { Typography } from "@material-tailwind/react";

const TABLE_HEAD_FIZYKOTERAPIA = ["Usługa", "Cena"];
const TABLE_ROWS_FIZYKOTERAPIA = [
    {
      service: "Jonoforeza",
      price: "20 zł",
    },
    {
      service: "Galwanizacja",
      price: "20 zł",
    },
    {
      service: "Interdyn",
      price: "20 zł",
    },
    {
      service: "Tens",
      price: "20 zł",
    },
    {
      service: "Diadynamik",
      price: "20 zł",
    },
    {
      service: "Elektrostymulacja",
      price: "20 zł",
    },
    {
      service: "Prądy Traberta",
      price: "20 zł",
    },
    {
      service: "Prądy Kotza",
      price: "20 zł",
    },
    {
      service: "Magnetronik",
      price: "20 zł",
    },
    {
      service: "Sollux",
      price: "20 zł",
    },
    {
      service: "Laser punktowy ",
      price: "20 zł",
    },
    {
      service: "Laser typu skanerowego",
      price: "20 zł",
    },
    {
      service: "Ultradźwięki",
      price: "20 zł",
    },
    {
      service: "Fonoforeza",
      price: "20 zł",
    },
    {
      service: "Interdyn",
      price: "20 zł",
    },
    {
      service: "Jonoforeza",
      price: "20 zł",
    },
    {
      service: "Krioterapia miejscowa",
      price: "20 zł",
    },
    {
      service: "Fala uderzeniowa",
      price: "60 zł",
    },
    {
      service: "Elektrostymulacja indywidualna ",
      price: "40 zł",
    },
  ];
const TABLE_HEAD_MASAZ = ["Usługa", "Czas", "Cena"];
const TABLE_ROWS_MASAZ = [
    {
      service: "Masaż tkanek głębokich",
      time: "30-60 min",                                                   
      price: "70zł/130zł",
    },
    {
      service: "Masaż leczniczy całościowy kręgosłupa",
      time: "30-60 min",
      price: "70zł/130zł",
    },
    {
      service: "Masaż leczniczy",
      time: "30-60 min", 
      price: "70zł/130zł",
    },
    {
      service: "Masaż bańką chińską",
      time: "30-60 min",
      price: "70zł",
    },
    {
      service: "Masaż Sportowy",
      time: "30-60 min", 
      price: "70zł/130",
    },
    {
      service: "Drenaż limfatyczny",
      time: "30-60 min", 
      price: "70zł/130zł",
    },
    {
      service: "Terapia Punktów spustowych",
      time: "30-60 min",
      price: "70zł",
    },

  ];
const TABLE_HEAD_KINEZYTERAPIA = ["Usługa", "Czas", "Cena"];
const TABLE_ROWS_KINEZYTERAPIA = [
    {
      service: "Terapia w obszarze czaszkowo-żuchwowym i czaszkowo-twarzowym",
      time: "30-60 min",                                                   
      price: "80zł",
    },
    {
      service: "Indywidualna praca z pacjentem",
      time: "30-60 min",
      price: "120 zł",
    },
    {
      service: "Kinesiology taping jednej okolicy (*cena zależna od wielkości aplikacji (wywiad, badanie, oklejanie))",
      time: "30-60 min", 
      price: "od 30zł",
    },
    {
      service: "PIR – poizometryczna relaksacja mięśni",
      time: "30-60 min",
      price: "75zł",
    },
    {
      service: "Terapia manualna blizny",
      time: "30-60 min", 
      price: "70zł",
    },
    {
      service: "Instruktaż ćwiczeń",
      time: "30-60 min", 
      price: "130zł",
    },
    {
      service: "Profilaktyka kręgosłupa",
      time: "30-60 min",
      price: "130zł",
    },
    {
      service: "Konsultacja fizjoterapeuty",
      time: "30-60 min",
      price: "130zł",
    },

  ];
const PriceList = () => {
    return (
        <>
            <div className='container m-auto'>
                <h2 className='font-bold text-2xl text-main-color m-auto my-4 mt-6 w-11/12 lg:w-4/5 '>Fizykoterapia</h2>
                <table className=" w-11/12 lg:w-4/5 m-auto table-auto">
                    <thead>
                        <tr>
                        {TABLE_HEAD_FIZYKOTERAPIA.map((head, index) => (
                            <th
                            key={head+index}
                            className={`${
                                index === 0
                                ? "rounded-tl-md text-left"
                                : index === 1
                                ? "rounded-tr-md text-right"
                                : " "
                            } border-b border-blue-gray-100 bg-blue-gray-50 p-4`}
                            >
                            <Typography
                                variant="small"
                                className="leading-none font-bold"
                            >
                                {head}
                            </Typography>
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS_FIZYKOTERAPIA.map(({ service, price }, index) => (
                        <tr key={service+index} className={`even:bg-blue-gray-50/50 `}>
                            <td className="p-4 text-left">
                            <Typography variant="small" className="font-normal">
                                {service}
                            </Typography>
                            </td>
                            <td className="p-4 text-right">
                            <Typography variant="small" className="font-normal">
                                {price}
                            </Typography>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='container m-auto'>
                <h2 className='font-bold text-2xl text-main-color m-auto my-4 w-11/12 lg:w-4/5 '>Masaż</h2>
                <table className=" w-11/12 lg:w-4/5 m-auto table-auto">
                    <thead>
                        <tr>
                        {TABLE_HEAD_MASAZ.map((head, index) => (
                            <th
                            key={head+index}
                            className={`${
                                index === 0 ? "rounded-tl-md text-left" : index === 1 ? "rounded-tr-md text-center" : index === 2 ? "rounded-tr-md text-right" : " "} border-b border-blue-gray-100 bg-blue-gray-50 p-4`}
                            >
                            <Typography
                                variant="small"
                                className="leading-none font-bold"
                            >
                                {head}
                            </Typography>
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS_MASAZ.map(({ service, time, price }, index) => (
                        <tr key={service} className={`even:bg-blue-gray-50/50 `}>
                            <td className="p-4 text-left">
                                <Typography variant="small" className="font-normal">
                                    {service}
                                </Typography>
                            </td>
                            <td className="p-4 text-center">
                                <Typography variant="small" className="font-normal">
                                    {time}
                                </Typography>
                            </td>
                            <td className="p-4 text-right">
                                <Typography variant="small" className="font-normal">
                                    {price}
                                </Typography>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='container m-auto'>
                <h2 className='font-bold text-2xl text-main-color m-auto my-4 w-11/12 lg:w-4/5 '>Kinezyterapia</h2>
                <table className=" w-11/12 lg:w-4/5 m-auto table-auto">
                    <thead>
                        <tr>
                        {TABLE_HEAD_KINEZYTERAPIA.map((head, index) => (
                            <th
                            key={head}
                            className={`${
                                index === 0 ? "rounded-tl-md text-left" : index === 1 ? "rounded-tr-md text-center" : index === 2 ? "rounded-tr-md text-right" : " "} border-b border-blue-gray-100 bg-blue-gray-50 p-4`}
                            >
                            <Typography
                                variant="small"
                                className="leading-none font-bold"
                            >
                                {head}
                            </Typography>
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS_KINEZYTERAPIA.map(({ service, time, price }, index) => (
                        <tr key={service} className={`even:bg-blue-gray-50/50 `}>
                            <td className="p-4 text-left">
                                <Typography variant="small" className="font-normal">
                                    {service}
                                </Typography>
                            </td>
                            <td className="p-4 text-center">
                                <Typography variant="small" className="font-normal">
                                    {time}
                                </Typography>
                            </td>
                            <td className="p-4 text-right">
                                <Typography variant="small" className="font-normal">
                                    {price}
                                </Typography>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PriceList;