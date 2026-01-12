// storage.js - Wrapper for localStorage

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function removeFromStorage(key) {
    localStorage.removeItem(key);
}