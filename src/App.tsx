import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  X,
  BookOpen,
} from "lucide-react";

const LEEDCreditsTable = () => {
  const [expandedCategory, setExpandedCategory] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterExemplary, setFilterExemplary] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const categoryColors: any = {
    lt: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-300",
      hover: "hover:bg-purple-100",
      dark: "bg-purple-700",
    },
    ss: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-300",
      hover: "hover:bg-amber-100",
      dark: "bg-amber-700",
    },
    wc: {
      bg: "bg-cyan-50",
      text: "text-cyan-700",
      border: "border-cyan-300",
      hover: "hover:bg-cyan-100",
      dark: "bg-cyan-700",
    },
    ea: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-300",
      hover: "hover:bg-green-100",
      dark: "bg-green-700",
    },
    mr: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-300",
      hover: "hover:bg-indigo-100",
      dark: "bg-indigo-700",
    },
    mq: {
      bg: "bg-rose-50",
      text: "text-rose-700",
      border: "border-rose-300",
      hover: "hover:bg-rose-100",
      dark: "bg-rose-700",
    },
    in: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-300",
      hover: "hover:bg-blue-100",
      dark: "bg-blue-700",
    },
    ip: {
      bg: "bg-teal-50",
      text: "text-teal-700",
      border: "border-teal-300",
      hover: "hover:bg-teal-100",
      dark: "bg-teal-700",
    },
    rp: {
      bg: "bg-pink-50",
      text: "text-pink-700",
      border: "border-pink-300",
      hover: "hover:bg-pink-100",
      dark: "bg-pink-700",
    },
  };

  const allCredits = {
    ip: {
      name: "Integrative Process",
      fullName: "Integrative Process",
      credits: [
        {
          id: "IP-Credit",
          name: "Integrative Process",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
      ],
      keyFacts: [
        "This is a *prerequisite* requiring compliance for BD+C new-construction projects. :contentReference[oaicite:2]{index=2}",
        "Intent: To support high-performance, cost-effective, and equitable project outcomes through an early analysis of the interrelationships among systems. :contentReference[oaicite:3]{index=3}",
        "Applies beginning in pre-design and continuing throughout design phases (for example: discovery, design, construction, and operations feedback). :contentReference[oaicite:4]{index=4}",
        "Requires the project team to identify synergies across disciplines and building systems. :contentReference[oaicite:5]{index=5}",
        "Requires documentation in the form of a ‘Project Team Letter’ summarising how analyses informed design decisions (replacing the previous worksheet). :contentReference[oaicite:6]{index=6}",
        "The analyses must include at least the following: (a) energy-related system analysis (e.g., simple box model) and (b) one on-site non-potable water source supplying a portion of at least two demand components. :contentReference[oaicite:7]{index=7}",
        "The Project Team Letter must be signed by all principal project team members, and made available to key stakeholders (owner, facility manager, tenants, community) explaining how the integrative process informed goals and design decisions. :contentReference[oaicite:8]{index=8}",
        "Exemplary performance option available: Additional interdisciplinary analyses (e.g., social equity, health & well-being, site selection) can earn extra recognition. :contentReference[oaicite:9]{index=9}",
      ],
    },
    lt: {
      name: "Location & Transportation",
      fullName: "Location and Transportation",
      credits: [
        {
          id: "LT-Credit-1",
          name: "LEED for Neighborhood Development Location",
          points: 16,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "LT-Credit-2",
          name: "Sensitive Land Protection",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "LT-Credit-3",
          name: "High Priority Site",
          points: 2,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "LT-Credit-4",
          name: "Surrounding Density and Diverse Uses",
          points: 5,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "LT-Credit-5",
          name: "Access to Quality Transit",
          points: 5,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "LT-Credit-6",
          name: "Bicycle Facilities",
          points: 1,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "LT-Credit-7",
          name: "Reduced Parking Footprint",
          points: 1,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "LT-Credit-8",
          name: "Green Vehicles",
          points: 1,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
      ],
      keyFacts: [
        // EXEMPLARY PERFORMANCE ACHIEVABLE CREDITS

        // LT CREDIT 3 — High Priority Site
        "LT Credit 3: High Priority Site — Exemplary Performance: Select multiple priority categories (e.g., historic district + brownfield) OR provide comprehensive cleanup and reuse plan.",

        // LT CREDIT 4 — Surrounding Density and Diverse Uses
        "LT Credit 4: Surrounding Density and Diverse Uses — Exemplary Performance: Exceed diverse use and density thresholds OR document additional pedestrian connectivity improvements.",

        // LT CREDIT 5 — Access to Quality Transit
        "LT Credit 5: Access to Quality Transit — Exemplary Performance: Exceed trip frequency thresholds OR provide access to multiple high-quality transit modes.",

        // LT CREDIT 6 — Bicycle Facilities
        "LT Credit 6: Bicycle Facilities — Exemplary Performance: Provide more storage, repair stations, OR e-bike charging beyond required thresholds.",

        // LT CREDIT 7 — Reduced Parking Footprint
        "LT Credit 7: Reduced Parking Footprint — Exemplary Performance: Significantly reduce parking beyond credit threshold OR eliminate parking entirely with strong demand management programs.",

        // LT CREDIT 8 — Green Vehicles
        "LT Credit 8: Green Vehicles — Exemplary Performance: Install EVSE for larger proportion (e.g., 10%+ spaces) OR combine with car-sharing and preferred parking incentives.",

        // CRITICAL EXAM FACTS

        "LT Credit 1: LEED for Neighborhood Development Location — 16 points maximum (highest in LT category) — Must be within certified LEED-ND project (Stage 2, Stage 3, or built).",

        "LT Credit 5: Access to Quality Transit — ¼ mile = bus/streetcar stops; ½ mile = BRT/rail/ferry stops — Must meet weekday AND weekend trip minimums — Planned transit must be funded and operational by occupancy.",

        "LT Credit 6: Bicycle Facilities — Requires: long-term storage (occupants) + short-term storage (visitors) + showers/changing rooms for regular users.",

        "LT Credit 7: Reduced Parking Footprint — Baseline from Parking Consultants Council OR local code — Exclude street parking from counts.",

        "LT Credit 8: Green Vehicles — 5% parking for green vehicles OR 2% with EV charging — Green vehicles = ACEEE score ≥45 — EVSE = Level 2 (208-240V) or higher.",

        "General LT Facts — Walking distances measured along pedestrian network (not straight line) — Previously developed land = altered by human activity — LT Credits apply to NC, Schools, CS rating systems.",
      ],
    },
    ss: {
      name: "Sustainable Sites",
      fullName: "Sustainable Sites",
      credits: [
        {
          id: "SS-Prereq-1",
          name: "Construction Activity Pollution Prevention",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "SS-Credit-1",
          name: "Site Assessment",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "SS-Credit-2",
          name: "Site Development - Protect or Restore Habitat",
          points: 2,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "SS-Credit-3",
          name: "Open Space",
          points: 1,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "SS-Credit-4",
          name: "Rainwater Management",
          points: 3,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "SS-Credit-5",
          name: "Heat Island Reduction",
          points: 2,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "SS-Credit-6",
          name: "Light Pollution Reduction",
          points: 1,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "SS-Credit-7",
          name: "Site Master Plan",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: ["Schools"],
        },
        {
          id: "SS-Credit-8",
          name: "Tenant Design and Construction Guidelines",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: ["CS", "Retail"],
        },
        {
          id: "SS-Credit-9",
          name: "Places of Respite",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "SS-Credit-10",
          name: "Direct Exterior Access",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "SS-Credit-11",
          name: "Joint Use of Facilities",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: ["Schools"],
        },
      ],
      keyFacts: [
        // EXEMPLARY PERFORMANCE ACHIEVABLE CREDITS (5 total in SS category)

        // SS CREDIT 2 — Site Development - Protect or Restore Habitat
        "SS Credit 2: Site Development - Protect or Restore Habitat — Exemplary Performance: Achieve significantly higher conservation percentages (e.g., 80% conservation on greenfield OR 60% restoration on previously developed) OR implement comprehensive habitat management plan with native species diversity.",

        // SS CREDIT 4 — Rainwater Management
        "SS Credit 4: Rainwater Management — Exemplary Performance: Manage 100th percentile storm event (beyond 95th percentile) OR achieve zero net runoff from site.",

        // SS CREDIT 5 — Heat Island Reduction
        "SS Credit 5: Heat Island Reduction — Exemplary Performance: Exceed minimum requirements significantly (e.g., 75%+ hardscape with high SRI OR 75%+ roof with high SRI/vegetated) OR combine multiple strategies (underground parking + vegetated roof + high albedo).",

        // SS CREDIT 6 — Light Pollution Reduction
        "SS Credit 6: Light Pollution Reduction — Exemplary Performance: Exceed baseline requirements with advanced lighting controls, reduced light levels beyond code, OR demonstrate lighting power density 25% below baseline with zero uplight.",

        // SS CREDIT 9 — Places of Respite (Check which credits actually offer EP - this may need verification)
        "SS Credit 9: Places of Respite — Exemplary Performance: Provide seating for 10%+ of occupants OR increase vegetated area to 50%+ OR create multiple diverse outdoor spaces with enhanced amenities.",

        // CRITICAL EXAM FACTS

        "SS Category Points: Maximum 10 points (NC/CS/Retail), 12 points (Schools) — 1 Prerequisite + 10-11 Credits depending on rating system.",

        "SS Prereq 1: Construction Activity Pollution Prevention — Required for all — ESC Plan must follow EPA CGP 2003 (or 2012) or stricter local codes — Protect disturbed areas, prevent sediment/pollutant discharge.",

        "SS Credit 1: Site Assessment — 1 point — Document site conditions including topography, hydrology, vegetation, soils, and human use.",

        "SS Credit 2: Protect or Restore Habitat — 2 points — GREENFIELD: 40% conservation (no development) — PREVIOUSLY DEVELOPED: 30% restoration with native/adapted plants — Invasive species removal required.",

        "SS Credit 3: Open Space — 1 point — 30% of site area must be open space — 25% of open space must be vegetated — Physically accessible to occupants.",

        "SS Credit 4: Rainwater Management — 3 points — 95th percentile storm event = 3 points — 85th percentile = 2 points — 75th percentile = 1 point — Manage rainfall on site through infiltration, evapotranspiration, or capture/reuse.",

        "SS Credit 5: Heat Island Reduction — 2 points — NON-ROOF: 50% hardscape minimum with SRI ≥29 (or shaded/underground/covered by solar) — ROOF: Low-slope SRI ≥82, Steep-slope SRI ≥39 (or vegetated roof for 75%+ area) — Can combine strategies.",

        "SS Credit 6: Light Pollution Reduction — 1 point — 0% uplight for ALL exterior fixtures — Backlight, uplight, glare (BUG) ratings required — Interior lighting controls for perimeter zones.",

        "SS Credit 7: Site Master Plan — 1 point (Schools only) — Develop long-term site plan for future development, habitat protection, and stormwater management.",

        "SS Credit 8: Tenant Design and Construction Guidelines — 1 point (CS/Retail only) — Provide tenants with sustainability guidelines addressing SS, WE, EA, MR, IEQ strategies.",

        "SS Credit 9: Places of Respite — 1 point — Seating for 5% of occupants — 30% vegetation in respite areas — Multiple outdoor spaces encouraged.",

        "SS Credit 10: Direct Exterior Access — 1 point — 50% of regularly occupied spaces must have direct access to outdoor environment — Walking distance requirements apply.",

        "SS Credit 11: Joint Use of Facilities — 1 point (Schools only) — Establish formal agreement to share facilities with community during non-school hours.",

        "General SS Facts — SRI = Solar Reflectance Index (measures heat rejection) — Percentile storm events based on local rainfall data — Native/adapted plants preferred for habitat and landscaping — Previously developed = altered by paving, construction, or grading.",
      ],
    },
    wc: {
      name: "Water Efficiency",
      fullName: "Water Efficiency",
      credits: [
        {
          id: "WC-Prereq-1",
          name: "Outdoor Water Use Reduction",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "WC-Prereq-2",
          name: "Indoor Water Use Reduction",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "WC-Prereq-3",
          name: "Building-Level Water Metering",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "WC-Credit-1",
          name: "Outdoor Water Use Reduction",
          points: 2,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "WC-Credit-2",
          name: "Indoor Water Use Reduction",
          points: 6,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "WC-Credit-3",
          name: "Cooling Tower Water Use",
          points: 2,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "WC-Credit-4",
          name: "Water Metering",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
      ],
      keyFacts: [
        // EXEMPLARY PERFORMANCE ACHIEVABLE CREDITS (3 total in WE category)

        // WE CREDIT 1 — Outdoor Water Use Reduction
        "WE Credit 1: Outdoor Water Use Reduction — Exemplary Performance: Achieve 100% reduction (no permanent irrigation system) on projects with planted areas OR use only captured rainwater/recycled water for all irrigation needs.",

        // WE CREDIT 2 — Indoor Water Use Reduction
        "WE Credit 2: Indoor Water Use Reduction — Exemplary Performance: Achieve 55% reduction from baseline (beyond 50% requirement) through ultra-efficient fixtures and fittings.",

        // WE CREDIT 4 — Water Metering
        "WE Credit 4: Water Metering — Exemplary Performance: Install metering for all major water subsystems (4+ subsystems) beyond the 2 required OR integrate with BMS for real-time monitoring and automated leak detection.",

        // CRITICAL EXAM FACTS

        "WE Category Points: Maximum 11 points — 3 Prerequisites + 4 Credits.",

        "WE Prereq 1: Outdoor Water Use Reduction — Required — Reduce outdoor potable water by 30% from baseline OR install no permanent irrigation system — Baseline = EPA WaterSense Water Budget Tool or local equivalent.",

        "WE Prereq 2: Indoor Water Use Reduction — Required — Reduce indoor potable water by 20% from baseline — Baseline = EPAct 1992 fixtures + LEED flush/flow rates.",

        "WE Prereq 3: Building-Level Water Metering — Required — Install permanent water meter for whole building to track total potable water use — Must record at ≤1 month intervals — Data shared for at least 5 years.",

        "WE Credit 1: Outdoor Water Use Reduction — 2 points — 50% reduction from baseline = 2 points OR no permanent irrigation system = 2 points — Use native/adaptive plants, high-efficiency irrigation, captured rainwater, or recycled water.",

        "WE Credit 2: Indoor Water Use Reduction — 6 points — 25% reduction = 1 point — 30% reduction = 2 points — 35% reduction = 3 points — 40% reduction = 4 points — 45% reduction = 5 points — 50% reduction = 6 points — Baseline fixtures: EPAct 1992 + LEED-specified flush/flow rates.",

        "WE Credit 3: Cooling Tower Water Use — 2 points — Option 1 (1 point): Conductivity meter + makeup water meter for cycles of concentration monitoring — Option 2 (1 point): Use non-potable water for 100% cooling tower makeup — Can achieve both options for 2 points total.",

        "WE Credit 4: Water Metering — 1 point — Install permanent meters for at least 2 water subsystems — Subsystems include: indoor fixtures, outdoor irrigation, domestic hot water, reclaimed water, process water, other — Meters must record at ≤1 month intervals — Data shared for at least 5 years.",

        "General WE Facts — EPAct 1992 baseline fixture rates: WC 1.6 gpf, Urinal 1.0 gpf, Lavatory 2.2 gpm, Shower 2.5 gpm, Kitchen faucet 2.2 gpm — LEED baseline adds specific requirements (e.g., HET toilets, sensor urinals) — Process water = water used for industrial processes, cooling, or building systems — Potable water reduction measured against calculated baseline, not existing conditions — Native/adapted plants = regionally appropriate species requiring minimal irrigation after establishment.",
      ],
    },
    ea: {
      name: "Energy & Atmosphere",
      fullName: "Energy and Atmosphere",
      credits: [
        {
          id: "EA-Prereq-1",
          name: "Fundamental Commissioning and Verification",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "EA-Prereq-2",
          name: "Minimum Energy Performance",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "EA-Prereq-3",
          name: "Building-Level Energy Metering",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "EA-Prereq-4",
          name: "Fundamental Refrigerant Management",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "EA-Credit-1",
          name: "Enhanced Commissioning",
          points: 6,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "EA-Credit-2",
          name: "Optimize Energy Performance",
          points: 18,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "EA-Credit-3",
          name: "Advanced Energy Metering",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "EA-Credit-4",
          name: "Demand Response",
          points: 2,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "EA-Credit-5",
          name: "Renewable Energy Production",
          points: 3,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "EA-Credit-6",
          name: "Enhanced Refrigerant Management",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "EA-Credit-7",
          name: "Green Power and Carbon Offsets",
          points: 2,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
      ],
      keyFacts: [
        // EXEMPLARY PERFORMANCE ACHIEVABLE CREDITS (4 total in EA category)

        // EA CREDIT 1 — Enhanced Commissioning
        "EA Credit 1: Enhanced Commissioning — Exemplary Performance: Achieve all Enhanced Cx components (design review + envelope commissioning + back-check) PLUS additional measures such as seasonal testing, monitoring-based commissioning for 1 year, or commissioning of specialty systems.",

        // EA CREDIT 2 — Optimize Energy Performance
        "EA Credit 2: Optimize Energy Performance — Exemplary Performance: Achieve 50% improvement over baseline (beyond 40% maximum credit threshold) through exceptional design and efficiency measures.",

        // EA CREDIT 5 — Renewable Energy Production
        "EA Credit 5: Renewable Energy Production — Exemplary Performance: Achieve 10% renewable energy production on-site (beyond 5% maximum credit threshold) through expanded solar, wind, or other renewable systems.",

        // EA CREDIT 7 — Green Power and Carbon Offsets
        "EA Credit 7: Green Power and Carbon Offsets — Exemplary Performance: Commit to 100% green power/carbon offsets for 10+ years (beyond 5-year requirement) OR achieve carbon neutrality through verified offsets and on-site renewables.",

        // CRITICAL EXAM FACTS

        "EA Category Points: Maximum 33 points (highest of all categories) — 4 Prerequisites + 7 Credits.",

        "EA Prereq 1: Fundamental Commissioning and Verification — Required — CxA must be independent of design/construction team — CxA must have experience on 2+ building projects — Includes: OPR/BOD, Cx plan, design review, construction oversight, systems testing, operator training, Cx report.",

        "EA Prereq 2: Minimum Energy Performance — Required — NEW CONSTRUCTION: 5% improvement over ASHRAE 90.1-2016 Appendix G baseline — MAJOR RENOVATION: 3% improvement over baseline — Use energy cost for compliance path — Prescriptive compliance allowed for certain building types.",

        "EA Prereq 3: Building-Level Energy Metering — Required — Install meter measuring whole-building energy use — Must record at ≤1 hour intervals — Data retention: 35 months minimum — Share data for at least 5 years.",

        "EA Prereq 4: Fundamental Refrigerant Management — Required — Zero use of CFC-based refrigerants in new HVAC&R systems — Phase out CFCs in existing equipment.",

        "EA Credit 1: Enhanced Commissioning — 6 points maximum — 2 points each for: Design review by CxA prior to mid-construction documents — Envelope commissioning — Systems manual and 10-month back-check after substantial completion.",

        "EA Credit 2: Optimize Energy Performance — 18 points maximum — Point scale: 6% improvement = 1 point, then 2% per additional point — 8% = 2pts, 10% = 3pts, 12% = 4pts, etc. — 40% improvement = 18 points — Baseline: ASHRAE 90.1-2016 Appendix G performance rating method — Energy cost must be reduced.",

        "EA Credit 3: Advanced Energy Metering — 1 point — Install advanced meters for 40% minimum of total expected annual energy consumption — Meters track individual end uses (e.g., HVAC, lighting, receptacles, process) — Must record at ≤1 hour intervals — Data retention: 35 months minimum.",

        "EA Credit 4: Demand Response — 2 points — Option 1: Infrastructure for 10% peak demand reduction — Option 2: Demonstrate 10% reduction through load shifting/shedding or on-site generation — Participate in utility or ISO demand response program.",

        "EA Credit 5: Renewable Energy Production — 3 points — 1% of energy from on-site renewables = 1 point — 3% = 2 points — 5% = 3 points — Calculated as % of annual energy cost — Must be renewable systems (solar PV, solar thermal, wind, geothermal, biomass, biogas, low-impact hydro).",

        "EA Credit 6: Enhanced Refrigerant Management — 1 point — Use equipment with zero ozone depletion AND low GWP — No refrigerants OR refrigerants meeting calculation threshold — Formula: LCGWP + LCODP × 105 ≤ threshold based on equipment type.",

        "EA Credit 7: Green Power and Carbon Offsets — 2 points — 50% of electricity from green power/carbon offsets = 1 point — 100% = 2 points — Minimum 5-year contract required — Green-e certified or equivalent renewable energy certificates (RECs) — Carbon offsets must be verified.",

        "General EA Facts — ASHRAE 90.1-2016 is baseline standard for energy performance — Appendix G = performance rating method (whole-building energy simulation) — OPR = Owner's Project Requirements, BOD = Basis of Design — CxA = Commissioning Authority (must be independent) — Energy cost includes all regulated energy (HVAC, lighting, hot water, receptacles in some cases) — Process energy excluded from EA Credit 2 but included in building-level metering — GWP = Global Warming Potential, ODP = Ozone Depletion Potential — Peak demand = maximum rate of electricity consumption (kW), not total energy (kWh).",
      ],
    },
    mr: {
      name: "Materials & Resources",
      fullName: "Materials and Resources",
      credits: [
        {
          id: "MR-Prereq-1",
          name: "Storage and Collection of Recyclables",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "MR-Prereq-2",
          name: "Construction and Demolition Waste Management Planning",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "MR-Prereq-3",
          name: "PBT Source Reduction - Mercury",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "MR-Credit-1",
          name: "Building Life-Cycle Impact Reduction",
          points: 5,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "MR-Credit-2",
          name: "Building Product Disclosure and Optimization - Environmental Product Declarations",
          points: 2,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "MR-Credit-3",
          name: "Building Product Disclosure and Optimization - Sourcing of Raw Materials",
          points: 2,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "MR-Credit-4",
          name: "Building Product Disclosure and Optimization - Material Ingredients",
          points: 2,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "MR-Credit-5",
          name: "Construction and Demolition Waste Management",
          points: 2,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "MR-Credit-6",
          name: "PBT Source Reduction - Mercury",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "MR-Credit-7",
          name: "PBT Source Reduction - Lead, Cadmium, and Copper",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "MR-Credit-8",
          name: "Furniture and Medical Furnishings",
          points: 2,
          isPrereq: false,
          exemplary: false,
          applies: ["NC", "Schools", "Healthcare"],
        },
        {
          id: "MR-Credit-9",
          name: "Design for Flexibility",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
      ],
      keyFacts: [
        // EXEMPLARY PERFORMANCE ACHIEVABLE CREDITS (5 total in MR category)

        // MR CREDIT 1 — Building Life-Cycle Impact Reduction
        "MR Credit 1: Building Life-Cycle Impact Reduction — Exemplary Performance: Reuse 95% of existing structure and envelope (beyond 75% maximum credit threshold) OR conduct whole-building LCA showing 10% reduction in at least 3 impact categories plus additional innovative reuse strategies.",

        // MR CREDIT 2 — Building Product Disclosure and Optimization - Environmental Product Declarations
        "MR Credit 2: BPDO - Environmental Product Declarations — Exemplary Performance: Achieve valuation threshold using 40 products with EPDs (double the 20 product requirement) OR 50% of cost with product-specific EPDs demonstrating supply chain transparency.",

        // MR CREDIT 3 — Building Product Disclosure and Optimization - Sourcing of Raw Materials
        "MR Credit 3: BPDO - Sourcing of Raw Materials — Exemplary Performance: Achieve valuation threshold using 40 products with responsible sourcing (double the 20 product requirement) OR demonstrate 50% of product cost from extended producer responsibility programs with closed-loop systems.",

        // MR CREDIT 4 — Building Product Disclosure and Optimization - Material Ingredients
        "MR Credit 4: BPDO - Material Ingredients — Exemplary Performance: Achieve valuation threshold using 40 products with ingredient disclosure (double the 20 product requirement) OR demonstrate 50% of product cost optimized using Cradle to Cradle, DECLARE labels, or full HPD with GreenScreen assessments.",

        // MR CREDIT 5 — Construction and Demolition Waste Management
        "MR Credit 5: Construction and Demolition Waste Management — Exemplary Performance: Divert 90% of C&D waste from landfill/incineration (beyond 75% maximum credit threshold) OR achieve zero waste to landfill with comprehensive tracking.",

        // CRITICAL EXAM FACTS

        "MR Category Points: Maximum 13 points (NC/CS/Retail/Data Centers/Warehouses/Hospitality), 15 points (Schools/Healthcare) — 3 Prerequisites + 6-9 Credits depending on rating system.",

        "MR Prereq 1: Storage and Collection of Recyclables — Required — Provide dedicated areas for separation and storage of recyclables — Minimum streams: paper, cardboard, glass, plastics, metals — Accessible to all building occupants.",

        "MR Prereq 2: Construction and Demolition Waste Management Planning — Required — Develop waste management plan identifying materials to be diverted — Establish diversion goals — Track and document actual diversion during construction.",

        "MR Prereq 3: PBT Source Reduction - Mercury — Required — Demonstrate at least 90 picograms mercury per lumen-hour for minimum 90% of lamps (by lumen output) — Use mercury-free lamps where possible — Applies to all permanently installed lamps.",

        "MR Credit 1: Building Life-Cycle Impact Reduction — 5 points maximum — Option 1: Historic building reuse (1-4 points based on % retained) — Option 2: Building/material reuse - 25% = 2pts, 50% = 3pts, 75% = 5pts (by cost of structure + envelope) — Option 3: Whole-building LCA showing 10% reduction in 3+ impact categories = 5 points — Option 4: Reuse/salvage 5 interior/exterior non-structural elements = 1 point.",

        "MR Credit 2: BPDO - Environmental Product Declarations — 2 points maximum — Minimum 20 products OR permanently installed products valued at $25,000 (or 2.5% of project total) — Industry-wide (generic) EPD = 0.5 points per product — Product-specific EPD = 1 point per product — Includes cradle-to-gate OR cradle-to-grave impacts — Third-party verification required.",

        "MR Credit 3: BPDO - Sourcing of Raw Materials — 2 points maximum — Minimum 20 products OR permanently installed products valued at $25,000 (or 2.5% of project total) — 1 point per product value for: Extended producer responsibility + CSR report OR recycled content OR bio-based materials OR wood products (FSC/PEFC certified) — Regional materials no longer earn points in v4.",

        "MR Credit 4: BPDO - Material Ingredients — 2 points maximum — Minimum 20 products OR permanently installed products valued at $25,000 (or 2.5% of project total) — Ingredient disclosure to 1000 ppm (0.1%) using: Health Product Declaration (HPD), Cradle to Cradle certification, DECLARE label, OR manufacturer inventory with GreenScreen v1.2 benchmark — Products optimized for ingredient health earn higher value.",

        "MR Credit 5: Construction and Demolition Waste Management — 2 points maximum — Divert 50% of C&D waste = 1 point — Divert 75% of C&D waste = 2 points — Measured by weight OR volume — Excavated soil, land-clearing debris, and hazardous materials excluded — Diversion = recycling, reuse, donation, or salvage (not incineration).",

        "MR Credit 6: PBT Source Reduction - Mercury in Lamps — 1 point — Demonstrate maximum 70 picograms mercury per lumen-hour for minimum 90% of lamps (stricter than prerequisite 90 pg) — Mercury-free lamps encouraged.",

        "MR Credit 7: PBT Source Reduction - Lead, Cadmium, and Copper — 1 point — Option 1: Exterior applied products free of intentionally added lead, cadmium, copper — Option 2: Demonstrate compliance with SCAQMD Rule 1168 VOC limits AND free of lead/cadmium/copper — Applies to coatings, sealants, adhesives on exterior.",

        "MR Credit 8: Furniture and Medical Furnishings — 2 points (NC/Schools/Healthcare only) — 30% of furniture cost meets multi-attribute sustainability standard (BIFMA e3, level, SCS Indoor Advantage Gold, etc.) AND chemical hazard assessment — 60% = 2 points.",

        "MR Credit 9: Design for Flexibility — 1 point — Design building systems to accommodate future changes without major renovations — Demonstrate adaptability in: floor plan, structure, MEP systems, envelope.",

        "General MR Facts — PBT = Persistent, Bioaccumulative, and Toxic substances — EPD = Environmental Product Declaration (ISO 14025, ISO 21930) — CSR = Corporate Sustainability Report — HPD = Health Product Declaration — FSC = Forest Stewardship Council — Material cost calculations based on permanently installed building products only — Furniture, mechanical/electrical/plumbing equipment, and operational materials typically excluded from BPDO credits unless permanently installed — Products can contribute to multiple BPDO credits if they meet multiple criteria — Default valuation: $25,000 OR 2.5% of total project cost (whichever is greater) applies to MR Credits 2, 3, 4.",
      ],
    },
    mq: {
      name: "Indoor Environmental Quality",
      fullName: "Indoor Environmental Quality",
      credits: [
        {
          id: "IEQ-Prereq-1",
          name: "Minimum Indoor Air Quality Performance",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IEQ-Prereq-2",
          name: "Environmental Tobacco Smoke Control",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IEQ-Prereq-3",
          name: "Minimum Acoustic Performance",
          points: 0,
          isPrereq: true,
          exemplary: false,
          applies: ["Schools", "Healthcare"],
        },
        {
          id: "IEQ-Credit-1",
          name: "Enhanced Indoor Air Quality Strategies",
          points: 2,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IEQ-Credit-2",
          name: "Low-Emitting Materials",
          points: 3,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IEQ-Credit-3",
          name: "Construction Indoor Air Quality Management Plan",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IEQ-Credit-4",
          name: "Indoor Air Quality Assessment",
          points: 2,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IEQ-Credit-5",
          name: "Thermal Comfort",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IEQ-Credit-6",
          name: "Interior Lighting",
          points: 2,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IEQ-Credit-7",
          name: "Daylight",
          points: 3,
          isPrereq: false,
          exemplary: true,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IEQ-Credit-8",
          name: "Quality Views",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IEQ-Credit-9",
          name: "Acoustic Performance",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
      ],
      keyFacts: [
        // EXEMPLARY PERFORMANCE ACHIEVABLE CREDITS (2 total in IEQ category)

        // IEQ CREDIT 2 — Low-Emitting Materials
        "IEQ Credit 2: Low-Emitting Materials — Exemplary Performance: Achieve compliance for 100% of product categories (interior paints/coatings, adhesives, sealants, flooring, composite wood, furniture/furnishings, ceilings/walls) using products that meet most stringent emissions standards (e.g., Living Building Challenge Red List Free, Cradle to Cradle Gold or higher for emissions).",

        // IEQ CREDIT 7 — Daylight
        "IEQ Credit 7: Daylight — Exemplary Performance: Achieve sDA300/50% ≥95% of regularly occupied floor area (beyond 75% for 3 points) through optimized glazing, daylighting design, and glare control strategies.",

        // CRITICAL EXAM FACTS

        "IEQ Category Points: Maximum 16 points — 2-3 Prerequisites (3 for Schools/Healthcare) + 9 Credits.",

        "IEQ Prereq 1: Minimum Indoor Air Quality Performance — Required — Meet ASHRAE 62.1-2010 (or current) minimum ventilation rates — Mechanically ventilated spaces: design per Ventilation Rate Procedure OR IAQ Procedure — Naturally ventilated spaces: meet ASHRAE 62.1 Section 5.1 requirements.",

        "IEQ Prereq 2: Environmental Tobacco Smoke Control — Required — Prohibit smoking inside building, within 25 feet of entries, outdoor air intakes, and operable windows — Provide designated smoking areas 25+ feet away OR prohibit smoking entirely on site — Post no-smoking signage.",

        "IEQ Prereq 3: Minimum Acoustic Performance — Required (Schools/Healthcare only) — Meet minimum HVAC background noise levels, Sound Transmission Class (STC) ratings, and reverberation time requirements per ANSI/ASA S12.60 or FGI Guidelines.",

        "IEQ Credit 1: Enhanced Indoor Air Quality Strategies — 2 points maximum — Option 1 (1 point): Entryway systems (grilles/grates) 10 feet long in primary direction of travel OR rollout mats — Option 2 (1 point): Interior cross-contamination prevention (exhaust/isolation for copy rooms, housekeeping, hazardous areas) — Option 3 (1 point): MERV 13+ filtration OR equivalent for outdoor/return air — Can combine options for 2 points.",

        "IEQ Credit 2: Low-Emitting Materials — 3 points maximum — Products must meet emissions standards: interior paints/coatings, adhesives, sealants, flooring, composite wood, furniture/furnishings, ceilings/walls — VOC limits per SCAQMD, GreenGuard Gold, or CA Section 01350 — Calculate compliance by cost, area, or budget method — Threshold: majority of each product category.",

        "IEQ Credit 3: Construction Indoor Air Quality Management Plan — 1 point — Protect absorptive materials from moisture during construction — Use MERV 8+ filtration during construction if HVAC used — Prohibit indoor use of tobacco products — Protect ductwork — Replace all filtration media before occupancy.",

        "IEQ Credit 4: Indoor Air Quality Assessment — 2 points maximum — Option 1 (2 points): Flush-out with 14,000 cubic feet of outdoor air per square foot before occupancy (3,500 cf if phased occupancy with ongoing flush) — Option 2 (2 points): Air testing after construction showing formaldehyde <27 ppb, TVOC <500 µg/m³, PM10 <50 µg/m³, PM2.5 <15 µg/m³ — Test after 14-day waiting period with new filters installed.",

        "IEQ Credit 5: Thermal Comfort — 1 point — Design HVAC systems per ASHRAE 55-2010 (or current) thermal comfort criteria — Provide individual comfort controls (operable windows, thermostats, etc.) for 50%+ of individual occupant spaces and 50%+ of shared multi-occupant spaces — Conduct thermal comfort survey 6-18 months after occupancy.",

        "IEQ Credit 6: Interior Lighting — 2 points maximum — Option 1 (1 point): Individual lighting controls for 90%+ individual occupant spaces OR 90%+ of multi-occupant spaces (with controls for every 200 SF or per individual) — Option 2 (1 point): Automatic lighting controls (occupancy sensors, time scheduling, daylighting controls) in all shared/circulation spaces — Must meet lighting quality thresholds (CRI, flicker, color temperature).",

        "IEQ Credit 7: Daylight — 3 points maximum — Option 1: Spatial Daylight Autonomy (sDA300/50%) for regularly occupied floor area - sDA ≥55% = 2 points, sDA ≥75% = 3 points — Option 2: Illuminance calculations + glare control - 55% = 2pts, 75% = 3pts — Annual Sunlight Exposure (ASE1000,250h) ≤10% required for glare control — Simulation using approved software required.",

        "IEQ Credit 8: Quality Views — 1 point — Achieve quality views for 75% of regularly occupied floor area — Views must include: multiple lines of sight 90° apart, unobstructed views 7.5H or 3× head height (whichever less), view factors (2 of 3: flora/fauna/sky, movement, objects 25+ feet away).",

        "IEQ Credit 9: Acoustic Performance — 1 point — Meet HVAC background noise requirements (40-50 dBA depending on space) — Meet minimum STC ratings for interior partitions (45-55 depending on space) — Meet reverberation time requirements (0.6-0.8 seconds depending on space and volume) — Follow ANSI/ASA S12.60 for schools or FGI Guidelines for healthcare.",

        "General IEQ Facts — ASHRAE 62.1 = ventilation standard, ASHRAE 55 = thermal comfort standard — MERV = Minimum Efficiency Reporting Value (filter rating) — MERV 8 minimum during construction, MERV 13+ for enhanced IAQ — VOC = Volatile Organic Compounds — sDA = Spatial Daylight Autonomy (% of floor area receiving 300+ lux for 50%+ occupied hours) — ASE = Annual Sunlight Exposure (direct sunlight causing glare) — STC = Sound Transmission Class (sound insulation rating) — Regularly occupied spaces = areas with seating/work for ≥1 hour, excluding circulation — IEQ focuses on occupant health, comfort, and productivity — Low-emitting materials reduce indoor air pollutants — Daylight and views improve occupant wellbeing and performance.",
      ],
    },
    in: {
      name: "Innovation",
      fullName: "Innovation",
      credits: [
        {
          id: "IN-Credit-1",
          name: "Innovation",
          points: 5,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
        {
          id: "IN-Credit-2",
          name: "LEED Accredited Professional",
          points: 1,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
      ],
      keyFacts: [
        // NO EXEMPLARY PERFORMANCE IN INNOVATION CATEGORY
        // Innovation category IS WHERE exemplary performance points are earned from other categories

        "IN Category Points: Maximum 6 points — No Prerequisites + 2 Credits (Innovation: 5 points, LEED AP: 1 point).",

        "IN Credit 1: Innovation — 5 points maximum — Three paths to earn points:",

        "Path 1 - Exemplary Performance: Achieve next performance threshold beyond maximum points in existing LEED credits — Maximum 3 exemplary performance points allowed across all categories — Must be from credits that explicitly allow exemplary performance — Common EP credits: LT (6 credits), SS (5 credits), WE (3 credits), EA (4 credits), MR (5 credits), IEQ (2 credits).",

        "Path 2 - Pilot Credits: Implement approved USGBC pilot credits — Worth 1 point each — Selected from official USGBC pilot credit library — Must meet all pilot credit requirements — Examples: integrative process, social equity, resilience planning.",

        "Path 3 - Innovation Strategy: Achieve significant, measurable environmental performance NOT addressed by existing LEED credits — Must provide quantifiable environmental/health benefit — Must demonstrate comprehensive understanding and application — Examples: innovative stormwater systems, novel materials, advanced building performance — Requires clear intent, requirements, submittals, and documentation.",

        "IN Credit 2: LEED Accredited Professional — 1 point — At least one principal participant on project team must be LEED AP with specialty appropriate to project — LEED AP must be credentialed at time of project registration — Principal participant = architect, engineer, project manager, commissioning agent, or other key team member — Must document involvement throughout design and construction process.",

        "General IN Facts — Innovation points reward exceptional performance beyond LEED requirements — Exemplary performance threshold typically 50% better than credit maximum (e.g., EA Credit 2: 40% → 50%) — Pilot credits allow testing of future LEED credits — Innovation strategies must be novel to LEED system, not just novel to project team — Maximum 3 EP points prevents 'gaming' the system — LEED AP specialty must match project type (e.g., BD+C for building design projects) — Innovation points can differentiate between certification levels (Certified/Silver/Gold/Platinum) — Total possible LEED points: 110 (100 base + 10 innovation/regional priority).",

        "Summary of Exemplary Performance Availability by Category:",
        "LT Category: 6 credits offer EP (Credits 3, 4, 5, 6, 7, 8)",
        "SS Category: 5 credits offer EP (Credits 2, 4, 5, 6, 9 - verify actual availability)",
        "WE Category: 3 credits offer EP (Credits 1, 2, 4)",
        "EA Category: 4 credits offer EP (Credits 1, 2, 5, 7)",
        "MR Category: 5 credits offer EP (Credits 1, 2, 3, 4, 5)",
        "IEQ Category: 2 credits offer EP (Credits 2, 7)",
        "IN Category: 0 credits offer EP (Innovation IS the exemplary performance category)",
      ],
    },
    rp: {
      name: "Regional Priority",
      fullName: "Regional Priority",
      credits: [
        {
          id: "RP-Credit",
          name: "Regional Priority",
          points: 4,
          isPrereq: false,
          exemplary: false,
          applies: [
            "NC",
            "Schools",
            "CS",
            "Retail",
            "Data Centers",
            "Warehouses",
            "Hospitality",
            "Healthcare",
          ],
        },
      ],
      keyFacts: [
        // NO EXEMPLARY PERFORMANCE IN REGIONAL PRIORITY CATEGORY
        // Regional Priority awards bonus points for achieving specific regionally important credits

        "RP Category Points: Maximum 4 bonus points — No Prerequisites + 1 Credit.",

        "RP Credit: Regional Priority — 4 points maximum — Bonus points awarded for achieving credits designated as regional priorities for project location.",

        "How Regional Priority Works: 6 credits designated as regional priorities per ZIP code — Earn 1 bonus point for each RP credit achieved (maximum 4 bonus points) — Must first achieve the underlying credit to earn RP bonus point — RP point is IN ADDITION to base credit points.",

        "Regional Priority Selection: Determined by USGBC chapters based on local environmental priorities — Address regionally specific issues: water scarcity, energy sources, local habitat, urban development patterns — Credits vary by region/ZIP code — Examples: In arid regions, water credits prioritized; in coastal areas, flooding/resilience prioritized.",

        "Regional Priority Process: Enter project ZIP code during registration — USGBC assigns 6 RP credits for that location — Review assigned RP credits in LEED Online — Prioritize these credits in design if pursuing high certification levels — RP credits span all categories (LT, SS, WE, EA, MR, IEQ).",

        "Strategic Importance: RP points can push projects to higher certification levels — Example: 79 base points + 4 RP = 83 points (Platinum vs Gold) — No additional documentation required beyond base credit — Automatically awarded when RP credit is achieved.",

        "General RP Facts — Regional Priority does NOT change credit requirements — RP is purely a bonus point system — All LEED BD+C projects eligible for 4 RP points regardless of rating system — RP credits updated periodically by USGBC to reflect changing regional priorities — Cannot earn RP points without achieving underlying credit — RP bonus points do not count toward exemplary performance limits.",

        "Total Maximum LEED Points: 110 points possible — 100 base points (across all categories) — 6 Innovation points (5 innovation + 1 LEED AP) — 4 Regional Priority bonus points.",

        "LEED Certification Levels: Certified: 40-49 points — Silver: 50-59 points — Gold: 60-79 points — Platinum: 80+ points.",
      ],
    },
  };

  const getCategoryColor = (category: any) =>
    categoryColors[category] || {
      bg: "bg-gray-50",
      text: "text-gray-700",
      border: "border-gray-300",
      hover: "hover:bg-gray-100",
      dark: "bg-gray-700",
    };

  const clearFilters = () => {
    setSearchTerm("");
    setFilterType("all");
    setFilterExemplary("all");
    setFilterCategory("all");
  };

  const allCreditsList = Object.entries(allCredits).flatMap(
    ([catKey, catData]) =>
      catData.credits.map((credit) => ({
        ...credit,
        category: catKey,
        categoryName: catData.name,
      }))
  );

  const filteredCredits = useMemo(() => {
    return allCreditsList.filter((credit) => {
      const matchesSearch =
        searchTerm === "" ||
        credit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        credit.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        filterType === "all" ||
        (filterType === "prereq" && credit.isPrereq) ||
        (filterType === "credit" && !credit.isPrereq);
      const matchesExemplary =
        filterExemplary === "all" ||
        (filterExemplary === "available" && credit.exemplary) ||
        (filterExemplary === "not-available" && !credit.exemplary);
      const matchesCategory =
        filterCategory === "all" || credit.category === filterCategory;
      return (
        matchesSearch && matchesType && matchesExemplary && matchesCategory
      );
    });
  }, [searchTerm, filterType, filterExemplary, filterCategory]);

  const activeFiltersCount = [
    searchTerm !== "",
    filterType !== "all",
    filterExemplary !== "all",
    filterCategory !== "all",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 p-6 w-screen overflow-x-hidden ">
      <div className=" mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-6 border-t-4 border-blue-600">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            LEED v4 BD+C Complete Credit Reference
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive credit guide with exam preparation facts
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 mb-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">Filters</h2>
              {activeFiltersCount > 0 && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                  {activeFiltersCount} active
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  <X className="w-4 h-4" />
                  Clear All
                </button>
              )}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200"
              >
                {showFilters ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Hide Filters
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Show Filters
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search credits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            )}
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                >
                  <option value="all">All Categories</option>
                  <option value="ip">Integrative Process</option>
                  <option value="lt">Location & Transportation</option>
                  <option value="ss">Sustainable Sites</option>
                  <option value="wc">Water Efficiency</option>
                  <option value="ea">Energy & Atmosphere</option>
                  <option value="mr">Materials & Resources</option>
                  <option value="mq">Indoor Environmental Quality</option>
                  <option value="in">Innovation</option>
                  <option value="rp">Regional Priority</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                >
                  <option value="all">All Types</option>
                  <option value="prereq">Prerequisites Only</option>
                  <option value="credit">Credits Only</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Exemplary
                </label>
                <select
                  value={filterExemplary}
                  onChange={(e) => setFilterExemplary(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                >
                  <option value="all">All Credits</option>
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option value="all">All Types</option>
                  <option value="nc">New Construction</option>
                  <option value="schools">Schools</option>
                  <option value="cs">Core & Shell</option>
                  <option value="retail">Retail</option>
                  <option value="dc">Data Centers</option>
                  <option value="warehouse">Warehouses</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="healthcare">Healthcare</option>
                </select>
              </div>
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-bold text-blue-600">
                {filteredCredits.length}
              </span>{" "}
              of <span className="font-bold">{allCreditsList.length}</span>{" "}
              credits
            </p>
          </div>
        </div>

        {Object.entries(allCredits).map(([catKey, catData]) => (
          <div
            key={catKey}
            className="bg-white rounded-xl shadow-xl mb-6 border border-gray-200 overflow-hidden"
          >
            <div
              className={`${getCategoryColor(catKey).dark} p-6 cursor-pointer`}
              onClick={() =>
                setExpandedCategory(expandedCategory === catKey ? null : catKey)
              }
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {catData.fullName}
                  </h2>
                  <p className="text-white text-opacity-90">
                    {catData.credits.length} credit
                    {catData.credits.length !== 1 ? "s" : ""} •{" "}
                    {catData.credits.reduce(
                      (sum, c) => sum + (c.isPrereq ? 0 : c.points),
                      0
                    )}{" "}
                    points max
                  </p>
                </div>
                {expandedCategory === catKey ? (
                  <ChevronUp className="w-8 h-8 text-white" />
                ) : (
                  <ChevronDown className="w-8 h-8 text-white" />
                )}
              </div>
            </div>

            {expandedCategory === catKey && (
              <div className="p-6">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full">
                    <thead className="bg-gray-100 border-b-2 border-gray-300">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">
                          Credit ID
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">
                          Name
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase">
                          Points
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase">
                          Exemplary
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">
                          Applies To
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {catData.credits.map((credit, idx) => (
                        <tr
                          key={idx}
                          className={getCategoryColor(catKey).hover}
                        >
                          <td className="px-4 py-3 text-sm font-mono text-gray-600">
                            {credit.id}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              {credit.isPrereq && (
                                <span className="px-2 py-1 text-xs font-bold bg-red-100 text-red-800 rounded">
                                  PREREQ
                                </span>
                              )}
                              <span className="font-semibold text-gray-800">
                                {credit.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            {credit.isPrereq ? (
                              <span className="text-gray-500 font-semibold">
                                Required
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">
                                {credit.points}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-center">
                            {credit.exemplary ? (
                              <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="w-6 h-6 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex flex-wrap gap-1">
                              {credit.applies.slice(0, 3).map((type, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-700 rounded"
                                >
                                  {type}
                                </span>
                              ))}
                              {credit.applies.length > 3 && (
                                <span className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-700 rounded">
                                  +{credit.applies.length - 3}
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        Key Facts for Exam Preparation
                      </h3>
                      <div className="space-y-6">
                        {/* Group facts by type */}
                        {(() => {
                          const facts = catData.keyFacts;
                          const exemplaryFacts = facts.filter((f) =>
                            f.includes("Exemplary Performance")
                          );
                          const creditFacts = facts.filter(
                            (f) =>
                              f.includes("Credit") &&
                              !f.includes("Exemplary Performance") &&
                              !f.includes("Prereq")
                          );
                          const prereqFacts = facts.filter((f) =>
                            f.includes("Prereq")
                          );
                          const generalFacts = facts.filter(
                            (f) =>
                              f.includes("General") ||
                              f.includes("Summary") ||
                              f.includes("Total") ||
                              f.includes("Certification Levels")
                          );
                          const categoryFacts = facts.filter(
                            (f) =>
                              f.includes("Category Points") ||
                              f.includes("Maximum")
                          );

                          return (
                            <>
                              {/* Category Overview */}
                              {categoryFacts.length > 0 && (
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                  <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                                    <span className="mr-2">📊</span>
                                    Category Overview
                                  </h4>
                                  <ul className="space-y-1">
                                    {categoryFacts.map((fact, idx) => (
                                      <li
                                        key={idx}
                                        className="text-gray-800 text-sm leading-relaxed"
                                      >
                                        {fact}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Exemplary Performance */}
                              {exemplaryFacts.length > 0 && (
                                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                                  <h4 className="font-bold text-purple-900 mb-3 flex items-center">
                                    <span className="mr-2">⭐</span>
                                    Exemplary Performance Opportunities
                                  </h4>
                                  <div className="space-y-3">
                                    {exemplaryFacts.map((fact, idx) => {
                                      const [title, ...content] =
                                        fact.split(" — ");
                                      return (
                                        <div
                                          key={idx}
                                          className="bg-white p-3 rounded shadow-sm"
                                        >
                                          <div className="font-semibold text-purple-800 mb-1">
                                            {title}
                                          </div>
                                          <div className="text-gray-700 text-sm">
                                            {content.join(" — ")}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* Prerequisites */}
                              {prereqFacts.length > 0 && (
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                                  <h4 className="font-bold text-red-900 mb-3 flex items-center">
                                    <span className="mr-2">⚠️</span>
                                    Prerequisites (Required)
                                  </h4>
                                  <div className="space-y-3">
                                    {prereqFacts.map((fact, idx) => {
                                      const [title, ...content] =
                                        fact.split(" — ");
                                      return (
                                        <div
                                          key={idx}
                                          className="bg-white p-3 rounded shadow-sm"
                                        >
                                          <div className="font-semibold text-red-800 mb-1">
                                            {title}
                                          </div>
                                          <div className="text-gray-700 text-sm">
                                            {content.join(" — ")}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* Credits */}
                              {creditFacts.length > 0 && (
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                                  <h4 className="font-bold text-green-900 mb-3 flex items-center">
                                    <span className="mr-2">✓</span>
                                    Credits & Requirements
                                  </h4>
                                  <div className="space-y-3">
                                    {creditFacts.map((fact, idx) => {
                                      const [title, ...content] =
                                        fact.split(" — ");
                                      return (
                                        <div
                                          key={idx}
                                          className="bg-white p-3 rounded shadow-sm hover:shadow-md transition-shadow"
                                        >
                                          <div className="font-semibold text-green-800 mb-1">
                                            {title}
                                          </div>
                                          <div className="text-gray-700 text-sm leading-relaxed">
                                            {content.join(" — ")}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* General Facts */}
                              {generalFacts.length > 0 && (
                                <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded">
                                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                                    <span className="mr-2">💡</span>
                                    Key Exam Facts & Definitions
                                  </h4>
                                  <div className="space-y-2">
                                    {generalFacts.map((fact, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-start bg-white p-2 rounded"
                                      >
                                        <span className="text-gray-600 font-bold mr-2 mt-0.5">
                                          •
                                        </span>
                                        <span className="text-gray-800 text-sm leading-relaxed">
                                          {fact}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
            LEED Certification Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
              <h4 className="font-bold text-green-800 text-lg mb-1">
                Certified
              </h4>
              <p className="text-green-700 font-semibold">40-49 points</p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 text-lg mb-1">Silver</h4>
              <p className="text-blue-700 font-semibold">50-59 points</p>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-600 rounded-lg p-4">
              <h4 className="font-bold text-yellow-800 text-lg mb-1">Gold</h4>
              <p className="text-yellow-700 font-semibold">60-79 points</p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-4">
              <h4 className="font-bold text-purple-800 text-lg mb-1">
                Platinum
              </h4>
              <p className="text-purple-700 font-semibold">80+ points</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Total possible: 110 points (100 base + 10 bonus from Regional
            Priority and Innovation)
          </p>
        </div>
      </div>
    </div>
  );
};

export default LEEDCreditsTable;
