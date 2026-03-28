import React, { createContext, useContext, useState, useCallback } from "react";
import type { Product } from "@/data/products";

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  phone: string;
  recipientName: string;
  recipientPhone: string;
  address: string;
  city: string;
  deliveryDate: string;
  deliveryTime: string;
  paymentMethod: string;
  items: OrderItem[];
  itemCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, "id" | "status" | "date">) => string;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
  getOrder: (orderId: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem("florabelle_orders");
    return saved ? JSON.parse(saved) : [];
  });

  const saveOrders = (newOrders: Order[]) => {
    setOrders(newOrders);
    localStorage.setItem("florabelle_orders", JSON.stringify(newOrders));
  };

  const addOrder = useCallback((orderData: Omit<Order, "id" | "status" | "date">) => {
    const id = `ORD-${String(Date.now()).slice(-6)}`;
    const newOrder: Order = {
      ...orderData,
      id,
      status: "processing",
      date: new Date().toISOString().split("T")[0],
    };
    setOrders(prev => {
      const updated = [newOrder, ...prev];
      localStorage.setItem("florabelle_orders", JSON.stringify(updated));
      return updated;
    });
    return id;
  }, []);

  const updateOrderStatus = useCallback((orderId: string, status: Order["status"]) => {
    setOrders(prev => {
      const updated = prev.map(o => o.id === orderId ? { ...o, status } : o);
      localStorage.setItem("florabelle_orders", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const getOrder = useCallback((orderId: string) => {
    return orders.find(o => o.id === orderId);
  }, [orders]);

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrders must be used within OrderProvider");
  return ctx;
};
