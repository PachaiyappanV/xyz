import {
  ArrowUpDown,
  AtSign,
  Bot,
  Clock,
  ContactRound,
  CreditCard,
  FileText,
  ImageIcon,
  Inbox,
  Key,
  LayoutGrid,
  Mail,
  Megaphone,
  MessageCircle,
  MessageSquare,
  MessageSquareText,
  Package,
  Phone,
  Settings,
  ShoppingBag,
  Tag,
  User,
  Users,
  Workflow,
} from "lucide-react";
export const navMain = [
  {
    title: "Dashboard",
    icon: LayoutGrid,
    isActive: true,
    link: "/app/dashboard",
  },
  {
    title: "Chat",
    icon: MessageSquareText,
    isActive: false,
  },
  {
    title: "Leads",
    icon: ContactRound,
    isActive: false,
    link: "/app/leads",
  },
  {
    title: "CTWA",
    icon: MessageCircle,
    isActive: false,
  },
  {
    title: "Campaign",
    icon: Megaphone,
    isActive: false,
  },
  {
    title: "Workflows",
    icon: Workflow,
    isActive: false,
  },
  {
    title: "Flow Builder",
    icon: ArrowUpDown,
    isActive: false,
  },
  {
    title: "Apps",
    icon: LayoutGrid,
    isActive: false,
  },
  {
    title: "Commerce",
    icon: ShoppingBag,
    isActive: false,
  },
  {
    title: "Payment",
    icon: CreditCard,
    isActive: false,
  },
  {
    title: "Delivery",
    icon: Package,
    isActive: false,
  },
  {
    title: "Settings",
    icon: Settings,
    isActive: false,
  },
];

export const navSecondary = {
  Chat: [
    { title: "Inbox", icon: Inbox },
    { title: "Mentions", icon: AtSign },
    { title: "All", icon: Users },
    { title: "Bot", icon: Bot },
    { title: "Unread", icon: Mail },
  ],
  Settings: [
    {
      label: "GENERAL",
      items: [
        { title: "Account Details", icon: User },
        { title: "Working Hours", icon: Clock },
        { title: "Users & Role", icon: Users },
        { title: "Teams", icon: Users },
        { title: "Inbox Settings", icon: Mail },
      ],
    },
    {
      label: "CHANNEL",
      items: [{ title: "Whatsapp", icon: Phone }],
    },
    {
      label: "CRM",
      items: [
        { title: "Field Collection", icon: FileText },
        { title: "Tags", icon: Tag },
      ],
    },
    {
      label: "CONTENT",
      items: [
        { title: "Quick Messages", icon: MessageSquare },
        { title: "Media", icon: ImageIcon },
      ],
    },
    {
      label: "USER",
      items: [
        { title: "Profile", icon: User },
        { title: "Change Password", icon: Key },
      ],
    },
  ],
};

export const leads = [
  {
    name: "Olivia Rhye",
    email: "rhye@empiremark.io",
    phone: "+1 (218) 699-3149",
    source: "Facebook",
    assigned: "/pic2.png",
  },
  {
    name: "Phoenix Baker",
    email: "baker@witventures.com",
    phone: "+1 (326) 507-6709",
    source: "Facebook",
    assigned: "/pic3.png",
  },
  {
    name: "Lana Steiner",
    email: "steiner@factorfour.com",
    phone: "+1 (208) 608-6292",
    source: "LinkedIn",
    assigned: "/pic4.png",
  },
  {
    name: "Demi Wilkinson",
    email: "wilkinson@marketsq.com",
    phone: "+1 (317) 234-8462",
    source: "Dribbble",
    assigned: "/pic5.png",
  },
  {
    name: "Candice Wu",
    email: "candice@voicefirm.com",
    phone: "+1 (680) 539-0761",
    source: "LinkedIn",
    assigned: "/pic6.png",
  },
  {
    name: "Natali Craig",
    email: "natali@maxusmedia.net",
    phone: "+1 (540) 683-1441",
    assigned: "/pic7.png",
    source: "UpWork",
  },
];

export const leadsTableHeaders = [
  "Name",
  "Phone",
  "Email",
  "Source",
  "Assigned",
  "",
];
export const TagsTableHeaders = [
  "Tag Name",
  "Created By",
  "Created At",
  "Actions",
];

export const tags = [
  {
    name: "Tag 1",
    createdBy: "John Doe",
    createdAt: "2022-01-01",
  },
  {
    name: "Tag 2",
    createdBy: "Jane Doe",
    createdAt: "2022-02-01",
  },
  {
    name: "Tag 3",
    createdBy: "Bob Smith",
    createdAt: "2022-03-01",
  },
  {
    name: "Tag 4",
    createdBy: "Alice Johnson",
    createdAt: "2022-04-01",
  },
  {
    name: "Tag 5",
    createdBy: "Charlie Brown",
    createdAt: "2022-05-01",
  },
  {
    name: "Tag 6",
    createdBy: "Eve Green",
    createdAt: "2022-06-01",
  },
];

export const fieldsTableHeaders = [
  "",
  "Label",
  "Type",
  "Status",
  "Mandatory",
  "Actions",
];

export const fields = [
  {
    label: "Phone",
    type: "phone-number",
    status: true,
    mandatory: true,
    custom: false,
  },
  {
    label: "Name",
    type: "text",
    status: true,
    mandatory: true,
    custom: false,
  },
  {
    label: "Email",
    type: "email",
    status: true,
    mandatory: false,
    custom: false,
  },
  {
    label: "Created At",
    type: "date",
    status: true,
    mandatory: true,
    custom: false,
  },
  {
    label: "Last Updated",
    type: "date",
    status: true,
    mandatory: true,
    custom: false,
  },
  {
    label: "Follow Up",
    type: "date",
    status: true,
    mandatory: false,
    custom: false,
  },
  {
    label: "Tags",
    type: "text",
    status: true,
    mandatory: false,
    custom: false,
  },
  {
    label: "Age",
    type: "text",
    status: true,
    mandatory: true,
    custom: true,
  },
];
