import React, { useEffect, useState } from "react";
import FoodRow from "../Components/foodRow";

export default function ApiProducts({ typeFoodFilter, onGenerateOrder  }) {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            const productsData = await getMenu();
            setMenu(productsData);
        };
        fetchMenu();
    }, []);

    const getMenu = async () => {
        try {
            const token = localStorage.getItem("accessToken");
            const response = await fetch("http://localhost:8080/products", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const productsData = await response.json();
                const filteredData = productsData.filter(
                    (product) => product.type === typeFoodFilter
                );
                return filteredData;
                // return productsData;
            } else {
                console.error("Error al obtener el menú:", response.status);
                return [];
            }
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    return (
        <>
            {menu.map((product) => (
                <FoodRow
                    key={product.id}
                    productID={product.id}
                    typeFood={product.type}
                    text={product.name}
                    price={product.price}
                    dateEntry={product.dateEntry}
                    onGenerateOrder={onGenerateOrder}
                />
            ))}
        </>
    );
};





