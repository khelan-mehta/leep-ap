import React, { useState, useMemo } from "react";
import {
  Home,
  Users,
  Briefcase,
  Settings,
  LogOut,
  Search,
  Bell,
  Menu,
  ChevronDown,
  Calendar,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
  Star,
  PhoneCall,
  Mail,
  MapPin,
  X,
  Activity,
} from "lucide-react";
import {
  Bookings,
  Customers,
  Dashboard,
  Modal,
  Services,
  SettingsPage,
  Sidebar,
} from "./components/Components";

// ==================== CONSTANTS ====================
const theme = {
  colors: {
    primary: "#0EA5E9",
    background: "#F9FAFB",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    active: "#0EA5E9",
    inactive: "#9CA3AF",
    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
  },
};

const initialBookings = [
  {
    id: 1,
    customer: "John Doe",
    service: "Plumbing",
    worker: "Rajesh Kumar",
    date: "2024-11-15",
    status: "completed",
    amount: 120,
    phone: "+91 98765 43210",
    address: "MG Road, Surat",
  },
  {
    id: 2,
    customer: "Sarah Smith",
    service: "Electrical",
    worker: "Vikram Singh",
    date: "2024-11-15",
    status: "in-progress",
    amount: 95,
    phone: "+91 98765 43211",
    address: "Adajan, Surat",
  },
  {
    id: 3,
    customer: "Mike Johnson",
    service: "Cleaning",
    worker: "Priya Desai",
    date: "2024-11-14",
    status: "completed",
    amount: 150,
    phone: "+91 98765 43212",
    address: "Vesu, Surat",
  },
  {
    id: 4,
    customer: "Emily Brown",
    service: "Painting",
    worker: "Manoj Yadav",
    date: "2024-11-14",
    status: "pending",
    amount: 450,
    phone: "+91 98765 43213",
    address: "Pal, Surat",
  },
  {
    id: 5,
    customer: "David Wilson",
    service: "AC Repair",
    worker: "Deepak Verma",
    date: "2024-11-13",
    status: "completed",
    amount: 130,
    phone: "+91 98765 43214",
    address: "Piplod, Surat",
  },
  {
    id: 6,
    customer: "Lisa Anderson",
    service: "Plumbing",
    worker: "Rajesh Kumar",
    date: "2024-11-13",
    status: "cancelled",
    amount: 80,
    phone: "+91 98765 43215",
    address: "Citylight, Surat",
  },
  {
    id: 7,
    customer: "Robert Taylor",
    service: "Carpentry",
    worker: "Amit Sharma",
    date: "2024-11-12",
    status: "completed",
    amount: 350,
    phone: "+91 98765 43216",
    address: "Athwa, Surat",
  },
  {
    id: 8,
    customer: "Jennifer White",
    service: "Cleaning",
    worker: "Priya Desai",
    date: "2024-11-12",
    status: "in-progress",
    amount: 120,
    phone: "+91 98765 43217",
    address: "Varachha, Surat",
  },
];

const initialWorkers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    category: "Plumbing",
    rating: 4.8,
    jobs: 156,
    status: "active",
    phone: "+91 98765 00001",
    email: "rajesh@service.com",
    joinDate: "2023-01-15",
    earnings: 45600,
  },
  {
    id: 2,
    name: "Vikram Singh",
    category: "Electrical",
    rating: 4.7,
    jobs: 134,
    status: "active",
    phone: "+91 98765 00002",
    email: "vikram@service.com",
    joinDate: "2023-02-20",
    earnings: 38900,
  },
  {
    id: 3,
    name: "Priya Desai",
    category: "Cleaning",
    rating: 4.9,
    jobs: 178,
    status: "active",
    phone: "+91 98765 00003",
    email: "priya@service.com",
    joinDate: "2022-11-10",
    earnings: 52300,
  },
  {
    id: 4,
    name: "Manoj Yadav",
    category: "Painting",
    rating: 4.6,
    jobs: 112,
    status: "inactive",
    phone: "+91 98765 00004",
    email: "manoj@service.com",
    joinDate: "2023-03-05",
    earnings: 34200,
  },
  {
    id: 5,
    name: "Deepak Verma",
    category: "Appliance Repair",
    rating: 4.7,
    jobs: 167,
    status: "active",
    phone: "+91 98765 00005",
    email: "deepak@service.com",
    joinDate: "2023-01-28",
    earnings: 48700,
  },
  {
    id: 6,
    name: "Amit Sharma",
    category: "Carpentry",
    rating: 4.8,
    jobs: 145,
    status: "active",
    phone: "+91 98765 00006",
    email: "amit@service.com",
    joinDate: "2022-12-15",
    earnings: 51200,
  },
];

const initialCustomers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 98765 43210",
    bookings: 5,
    totalSpent: 890,
    joinDate: "2024-01-15",
    status: "active",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+91 98765 43211",
    bookings: 3,
    totalSpent: 450,
    joinDate: "2024-02-20",
    status: "active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+91 98765 43212",
    bookings: 7,
    totalSpent: 1250,
    joinDate: "2023-12-10",
    status: "active",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@example.com",
    phone: "+91 98765 43213",
    bookings: 2,
    totalSpent: 600,
    joinDate: "2024-03-05",
    status: "active",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    phone: "+91 98765 43214",
    bookings: 4,
    totalSpent: 780,
    joinDate: "2024-01-28",
    status: "inactive",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "lisa@example.com",
    phone: "+91 98765 43215",
    bookings: 6,
    totalSpent: 920,
    joinDate: "2023-11-15",
    status: "active",
  },
];

const initialServices = [
  {
    id: 1,
    name: "Plumbing",
    category: "Home Repair",
    basePrice: 100,
    bookings: 234,
    workers: 8,
    status: "active",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Electrical",
    category: "Home Repair",
    basePrice: 90,
    bookings: 198,
    workers: 6,
    status: "active",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Cleaning",
    category: "Maintenance",
    basePrice: 80,
    bookings: 312,
    workers: 12,
    status: "active",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Painting",
    category: "Home Improvement",
    basePrice: 200,
    bookings: 145,
    workers: 5,
    status: "active",
    rating: 4.5,
  },
  {
    id: 5,
    name: "AC Repair",
    category: "Appliance",
    basePrice: 120,
    bookings: 189,
    workers: 7,
    status: "active",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Carpentry",
    category: "Home Improvement",
    basePrice: 150,
    bookings: 167,
    workers: 4,
    status: "active",
    rating: 4.6,
  },
];

// ==================== UTILITY FUNCTIONS ====================
const getStatusColor = (status: any) => {
  switch (status) {
    case "completed":
      return theme.colors.success;
    case "in-progress":
      return theme.colors.primary;
    case "pending":
      return theme.colors.warning;
    case "cancelled":
      return theme.colors.danger;
    case "active":
      return theme.colors.success;
    case "inactive":
      return theme.colors.danger;
    default:
      return theme.colors.textSecondary;
  }
};

const getStatusBg = (status: any) => {
  switch (status) {
    case "completed":
      return "#D1FAE5";
    case "in-progress":
      return "#DBEAFE";
    case "pending":
      return "#FEF3C7";
    case "cancelled":
      return "#FEE2E2";
    case "active":
      return "#D1FAE5";
    case "inactive":
      return "#FEE2E2";
    default:
      return "#F3F4F6";
  }
};

// ==================== SIDEBAR COMPONENT ====================

// ==================== TOPBAR COMPONENT ====================
const TopBar = ({
  searchQuery,
  setSearchQuery,
  notifications,
  setNotifications,
}: any) => {
  return (
    <div
      style={{
        background: theme.colors.surface,
        borderBottom: `1px solid ${theme.colors.border}`,
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ position: "relative", flex: 1, maxWidth: "400px" }}>
        <Search
          size={20}
          color={theme.colors.textSecondary}
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px 10px 40px",
            border: `1px solid ${theme.colors.border}`,
            borderRadius: "8px",
            fontSize: "14px",
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button
          onClick={() => setNotifications(0)}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: theme.colors.background,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Bell size={20} color={theme.colors.text} />
          {notifications > 0 && (
            <span
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: theme.colors.danger,
              }}
            />
          )}
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: theme.colors.primary,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            A
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: theme.colors.text,
              }}
            >
              Admin User
            </div>
            <div
              style={{ fontSize: "12px", color: theme.colors.textSecondary }}
            >
              admin@serviceapp.com
            </div>
          </div>
          <ChevronDown size={16} color={theme.colors.textSecondary} />
        </div>
      </div>
    </div>
  );
};

// ==================== FILTER BAR COMPONENT ====================
const FilterBar = ({
  type,
  statusFilter,
  setStatusFilter,
  dateFilter,
  setDateFilter,
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  setSearchQuery,
}: any) => (
  <div
    style={{
      display: "flex",
      gap: "12px",
      marginBottom: "20px",
      flexWrap: "wrap",
      alignItems: "center",
    }}
  >
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      style={{
        padding: "8px 12px",
        border: `1px solid ${theme.colors.border}`,
        borderRadius: "8px",
        fontSize: "14px",
        background: theme.colors.surface,
        cursor: "pointer",
      }}
    >
      <option value="all">All Status</option>
      {type === "bookings" ? (
        <>
          <option value="completed">Completed</option>
          <option value="in-progress">In Progress</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
        </>
      ) : (
        <>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </>
      )}
    </select>

    {type === "bookings" && (
      <select
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
        style={{
          padding: "8px 12px",
          border: `1px solid ${theme.colors.border}`,
          borderRadius: "8px",
          fontSize: "14px",
          background: theme.colors.surface,
          cursor: "pointer",
        }}
      >
        <option value="all">All Time</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
      </select>
    )}

    {type === "workers" && (
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        style={{
          padding: "8px 12px",
          border: `1px solid ${theme.colors.border}`,
          borderRadius: "8px",
          fontSize: "14px",
          background: theme.colors.surface,
          cursor: "pointer",
        }}
      >
        <option value="all">All Categories</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Electrical">Electrical</option>
        <option value="Cleaning">Cleaning</option>
        <option value="Painting">Painting</option>
        <option value="Appliance Repair">Appliance Repair</option>
        <option value="Carpentry">Carpentry</option>
      </select>
    )}

    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      style={{
        padding: "8px 12px",
        border: `1px solid ${theme.colors.border}`,
        borderRadius: "8px",
        fontSize: "14px",
        background: theme.colors.surface,
        cursor: "pointer",
      }}
    >
      <option value="date">Sort by Date</option>
      {type === "bookings" && <option value="amount">Sort by Amount</option>}
      {type === "workers" && (
        <>
          <option value="rating">Sort by Rating</option>
          <option value="jobs">Sort by Jobs</option>
          <option value="earnings">Sort by Earnings</option>
        </>
      )}
      {type === "customers" && (
        <>
          <option value="bookings">Sort by Bookings</option>
          <option value="totalSpent">Sort by Spending</option>
        </>
      )}
    </select>

    <button
      onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      style={{
        padding: "8px 16px",
        border: `1px solid ${theme.colors.border}`,
        borderRadius: "8px",
        fontSize: "14px",
        background: theme.colors.surface,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {sortOrder === "asc" ? "↑" : "↓"}{" "}
      {sortOrder === "asc" ? "Ascending" : "Descending"}
    </button>

    <button
      onClick={() => {
        setStatusFilter("all");
        setCategoryFilter("all");
        setDateFilter("all");
        setSortBy("date");
        setSortOrder("desc");
        setSearchQuery("");
      }}
      style={{
        padding: "8px 16px",
        border: "none",
        borderRadius: "8px",
        fontSize: "14px",
        background: theme.colors.danger,
        color: "white",
        cursor: "pointer",
        marginLeft: "auto",
      }}
    >
      Reset Filters
    </button>
  </div>
);

// ==================== DASHBOARD COMPONENT ====================

// ==================== WORKERS COMPONENT ====================
const Workers = ({
  workers,
  updateWorkerStatus,
  deleteItem,
  setSelectedItem,
  setModalType,
  setShowModal,
  filterData,
}: any) => {
  const filteredWorkers = filterData(workers, "workers");

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          background: theme.colors.surface,
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: theme.colors.text,
              margin: 0,
            }}
          >
            Workers Management ({filteredWorkers.length})
          </h2>
          <button
            style={{
              padding: "10px 20px",
              background: theme.colors.primary,
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Plus size={18} />
            Add Worker
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredWorkers.map((worker: any) => (
            <div
              key={worker.id}
              style={{
                background: theme.colors.background,
                borderRadius: "12px",
                padding: "20px",
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <div style={{ display: "flex", gap: "12px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: theme.colors.primary,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    {worker.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: theme.colors.text,
                        marginBottom: "4px",
                      }}
                    >
                      {worker.name}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: theme.colors.textSecondary,
                      }}
                    >
                      {worker.category}
                    </div>
                  </div>
                </div>
                <select
                  value={worker.status}
                  onChange={(e) =>
                    updateWorkerStatus(worker.id, e.target.value)
                  }
                  style={{
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "600",
                    background:
                      worker.status === "active" ? "#D1FAE5" : "#FEE2E2",
                    color:
                      worker.status === "active"
                        ? theme.colors.success
                        : theme.colors.danger,
                    border: "none",
                    cursor: "pointer",
                    textTransform: "capitalize",
                  }}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: theme.colors.textSecondary,
                      marginBottom: "4px",
                    }}
                  >
                    Rating
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: theme.colors.text,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Star size={16} fill="#F59E0B" color="#F59E0B" />
                    {worker.rating}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: theme.colors.textSecondary,
                      marginBottom: "4px",
                    }}
                  >
                    Jobs Done
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: theme.colors.text,
                    }}
                  >
                    {worker.jobs}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: theme.colors.textSecondary,
                      marginBottom: "4px",
                    }}
                  >
                    Earnings
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: theme.colors.success,
                    }}
                  >
                    ${worker.earnings.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: theme.colors.textSecondary,
                      marginBottom: "4px",
                    }}
                  >
                    Joined
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: theme.colors.text,
                    }}
                  >
                    {new Date(worker.joinDate).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div
                style={{
                  borderTop: `1px solid ${theme.colors.border}`,
                  paddingTop: "12px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: theme.colors.textSecondary,
                    marginBottom: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <PhoneCall size={12} />
                  {worker.phone}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: theme.colors.textSecondary,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Mail size={12} />
                  {worker.email}
                </div>
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => {
                    setSelectedItem(worker);
                    setModalType("worker");
                    setShowModal(true);
                  }}
                  style={{
                    flex: 1,
                    padding: "8px",
                    background: theme.colors.primary,
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <Eye size={16} />
                  View Details
                </button>
                <button
                  onClick={() => deleteItem(worker.id, "worker")}
                  style={{
                    padding: "8px 12px",
                    background: theme.colors.danger,
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== CUSTOMERS COMPONENT ====================

// ==================== MAIN ADMIN PANEL COMPONENT ====================
const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookings, setBookings] = useState(initialBookings);
  const [workers, setWorkers] = useState(initialWorkers);
  const [customers, setCustomers] = useState(initialCustomers);
  const [services, setServices] = useState(initialServices);
  const [notifications, setNotifications] = useState(3);

  // Filters
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  // Modals
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  // Filtering logic
  const filterData = (data: any, type: any) => {
    let filtered = [...data];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((item) => {
        const searchLower = searchQuery.toLowerCase();
        if (type === "bookings") {
          return (
            item.customer.toLowerCase().includes(searchLower) ||
            item.service.toLowerCase().includes(searchLower) ||
            item.worker.toLowerCase().includes(searchLower)
          );
        } else if (type === "workers") {
          return (
            item.name.toLowerCase().includes(searchLower) ||
            item.category.toLowerCase().includes(searchLower)
          );
        } else if (type === "customers") {
          return (
            item.name.toLowerCase().includes(searchLower) ||
            item.email.toLowerCase().includes(searchLower)
          );
        } else if (type === "services") {
          return (
            item.name.toLowerCase().includes(searchLower) ||
            item.category.toLowerCase().includes(searchLower)
          );
        }
        return true;
      });
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((item) => item.status === statusFilter);
    }

    // Category filter
    if (categoryFilter !== "all" && type === "workers") {
      filtered = filtered.filter((item) => item.category === categoryFilter);
    }

    // Date filter
    if (dateFilter !== "all" && type === "bookings") {
      const today: any = new Date();
      filtered = filtered.filter((item) => {
        const itemDate: any = new Date(item.date);
        const diffDays = Math.floor((today - itemDate) / (1000 * 60 * 60 * 24));

        if (dateFilter === "today") return diffDays === 0;
        if (dateFilter === "week") return diffDays <= 7;
        if (dateFilter === "month") return diffDays <= 30;
        return true;
      });
    }

    // Sorting
    filtered.sort((a, b) => {
      let aVal, bVal;

      if (sortBy === "date") {
        aVal = new Date(a.date || a.joinDate);
        bVal = new Date(b.date || b.joinDate);
      } else if (
        sortBy === "amount" ||
        sortBy === "earnings" ||
        sortBy === "totalSpent"
      ) {
        aVal = a[sortBy] || 0;
        bVal = b[sortBy] || 0;
      } else if (sortBy === "rating") {
        aVal = a.rating || 0;
        bVal = b.rating || 0;
      } else {
        aVal = a[sortBy] || "";
        bVal = b[sortBy] || "";
      }

      if (sortOrder === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    return filtered;
  };

  const updateBookingStatus = (id: any, newStatus: any) => {
    setBookings(
      bookings.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const updateWorkerStatus = (id: any, newStatus: any) => {
    setWorkers(
      workers.map((w) => (w.id === id ? { ...w, status: newStatus } : w))
    );
  };

  const deleteItem = (id: any, type: any) => {
    if (type === "booking") {
      setBookings(bookings.filter((b) => b.id !== id));
    } else if (type === "worker") {
      setWorkers(workers.filter((w) => w.id !== id));
    } else if (type === "customer") {
      setCustomers(customers.filter((c) => c.id !== id));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: theme.colors.background,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <TopBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          notifications={notifications}
          setNotifications={setNotifications}
        />

        <div style={{ flex: 1, overflowY: "auto" }}>
          {activeTab === "dashboard" && (
            <Dashboard
              bookings={bookings}
              workers={workers}
              customers={customers}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "bookings" && (
            <>
              <div style={{ padding: "24px 24px 0" }}>
                <FilterBar
                  type="bookings"
                  statusFilter={statusFilter}
                  setStatusFilter={setStatusFilter}
                  dateFilter={dateFilter}
                  setDateFilter={setDateFilter}
                  categoryFilter={categoryFilter}
                  setCategoryFilter={setCategoryFilter}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  setSearchQuery={setSearchQuery}
                />
              </div>
              <Bookings
                bookings={bookings}
                updateBookingStatus={updateBookingStatus}
                deleteItem={deleteItem}
                setSelectedItem={setSelectedItem}
                setModalType={setModalType}
                setShowModal={setShowModal}
                filterData={filterData}
              />
            </>
          )}

          {activeTab === "workers" && (
            <>
              <div style={{ padding: "24px 24px 0" }}>
                <FilterBar
                  type="workers"
                  statusFilter={statusFilter}
                  setStatusFilter={setStatusFilter}
                  dateFilter={dateFilter}
                  setDateFilter={setDateFilter}
                  categoryFilter={categoryFilter}
                  setCategoryFilter={setCategoryFilter}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  setSearchQuery={setSearchQuery}
                />
              </div>
              <Workers
                workers={workers}
                updateWorkerStatus={updateWorkerStatus}
                deleteItem={deleteItem}
                setSelectedItem={setSelectedItem}
                setModalType={setModalType}
                setShowModal={setShowModal}
                filterData={filterData}
              />
            </>
          )}

          {activeTab === "customers" && (
            <>
              <div style={{ padding: "24px 24px 0" }}>
                <FilterBar
                  type="customers"
                  statusFilter={statusFilter}
                  setStatusFilter={setStatusFilter}
                  dateFilter={dateFilter}
                  setDateFilter={setDateFilter}
                  categoryFilter={categoryFilter}
                  setCategoryFilter={setCategoryFilter}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  setSearchQuery={setSearchQuery}
                />
              </div>
              <Customers
                customers={customers}
                deleteItem={deleteItem}
                setSelectedItem={setSelectedItem}
                setModalType={setModalType}
                setShowModal={setShowModal}
                filterData={filterData}
              />
            </>
          )}

          {activeTab === "services" && (
            <Services services={services} filterData={filterData} />
          )}

          {activeTab === "settings" && <SettingsPage />}
        </div>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedItem={selectedItem}
        modalType={modalType}
      />
    </div>
  );
};

export default AdminPanel;
