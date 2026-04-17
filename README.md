# Reconciliation Pages (Frontend Task)

## Overview

This project implements two reconciliation pages based on the provided APIs:

* Payment Reconciliation (`/reconciliation/payment`)
* Withdrawal Reconciliation (`/reconciliation/withdrawal`)

The goal was to build a clean, maintainable, and scalable frontend using modern React patterns and proper separation of concerns.

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* React Query (TanStack Query)
* Axios
* Tailwind CSS

---

## Features

### Core Requirements

* Fetch and display data in a table
* Loading, error, and empty states handling
* Pagination (page + limit)
* Basic filtering:

  * Search
  * Status
* Status displayed with colored badges
* Clean CRM-style UI

### Bonus Features

* Row details modal (click on row)

---

## Project Structure

```
src/
├── app/
│   ├── reconciliation/
│   │   ├── payment/
│   │   ├── withdrawal/
│
├── features/
│   ├── reconciliation/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   ├── utils/
│
├── shared/
│   ├── components/
│   ├── lib/
│   ├── utils/
```

### Key Architectural Decisions

* **Separation of Concerns (SOC)**:

  * API logic → `services/`
  * State & data fetching → `hooks/`
  * UI → `components/`
* **Reusable Components**:

  * Generic Table
  * Modal
  * Pagination
* **Feature-based structure** for scalability

---

## Data Handling Strategy

The two APIs return slightly different data structures.

To handle this:

* A **unified mapper** was implemented
* API responses are normalized into a shared `ReconciliationItem` type
* This allows reuse of the same table and UI components

---

## Filtering & Pagination

### Important Note

The API does **not support filtering** (search/status).

Because of that:

* Filtering is implemented **on the client side**
* Pagination behavior:

  * Server-side pagination when no filters are applied
  * Client-side pagination when filtering is active

This ensures correct UX while still respecting API limitations.

---

## Challenges

### 1. Inconsistent API Structure

The payment and withdrawal endpoints returned different field names.

**Solution:**

* Created a unified mapper with type guards

---

### 2. React Query Infinite Refetch Issue

Passing unstable objects into query keys caused re-fetch loops.

**Solution:**

* Stabilized params using `useMemo`
* Used consistent query key strategy

---

### 3. Filtering with Pagination

Client-side filtering conflicted with server pagination.

**Solution:**

* Switched to client-side pagination when filters are active

---

## Possible Improvements

* Server-side filtering (if API supports it)
* Better pagination UI (page numbers)
* Column customization
* CSV export UI integration

---

## How to Run

```bash
npm install
npm run dev
```

---

## Final Notes

The focus of this implementation was:

* Clean and maintainable structure
* Proper data flow
* Reusable components
* Real-world frontend patterns

No unnecessary abstractions were introduced, and complexity was kept proportional to the task.
