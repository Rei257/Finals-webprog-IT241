/**
 * api.js — Axios HTTP Client
 *
 * Centralized API service for communicating with the NestJS backend.
 * In development, requests are proxied via Vite (/api → localhost:3000).
 * In production, set VITE_API_BASE_URL to the deployed backend URL.
 */

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch all portfolio projects from the backend.
 * @returns {Promise<Array>} Array of project objects.
 */
export async function fetchProjects() {
  const { data } = await api.get('/projects');
  return data;
}

/**
 * Submit a contact form message to the backend.
 * @param {{ name: string, email: string, content: string }} payload
 * @returns {Promise<Object>} Server response.
 */
export async function sendMessage(payload) {
  const { data } = await api.post('/contact', payload);
  return data;
}

/**
 * Fetch all contact messages from the backend.
 * @returns {Promise<Array>} Array of message objects.
 */
export async function fetchMessages() {
  const { data } = await api.get('/contact');
  return data;
}

export default api;
