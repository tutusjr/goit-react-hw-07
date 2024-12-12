import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `https://${import.meta.env.VITE_API_TOKEN}.mockapi.io/contacts`;

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (e) {
      const errorMessage = e.response?.data?.message || "Something Went Wrong";
      return rejectWithValue(errorMessage);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newContact);
      return response.data;
    } catch (e) {
      const errorMessage = e.response?.data?.message || "Failed to add contact";
      return rejectWithValue(errorMessage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (e) {
      const errorMessage =
        e.response?.data?.message || "Failed to delete contact";
      return rejectWithValue(errorMessage);
    }
  }
);

