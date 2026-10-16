# Sewing Machine Mechanic Services App

## Overview
A showcase website for a sewing machine mechanic's services, allowing customers to learn about services and contact the mechanic directly for repairs and machine purchases. The application is publicly accessible and ready for production use.

## Core Features

### Home Page
- Introduction to the sewing machine mechanic and business overview
- Highlight of main services: repairs, new machines, second-hand machines, and home delivery
- Professional presentation of the business
- Enhanced call-to-action section with urgent messaging: "Call Now for Doorstep Repair" button
- Prominently display business phone number **9980481645** with call icon styling under CTA button using tel: link for mobile dialing
- "Chat on WhatsApp" button linking to `https://wa.me/919980481645`
- Service Areas section with heading "Service Areas" and description: "We provide sewing machine repair and delivery services across nearby areas. Call us to check availability in your location."
- Service location section with embedded map showing exact coordinates **12°50'04.9"N 77°29'09.6"E** labeled as "Service Location"

### Services Page
- List of available services with descriptions:
  - Sewing machine repairs
  - New sewing machine sales
  - Second-hand sewing machine sales
  - Home delivery service
- Display prices where available
- Clear service descriptions
- Enhanced call-to-action section with urgent messaging: "Need Immediate Repair? Call Us" button
- Prominently display business phone number **9980481645** with call icon styling under CTA button using tel: link for mobile dialing

#### Detailed Service List
- Four prominent service cards with clear titles, emojis, and bullet points fetched from backend:
  1. **🔧 Sewing Machine Repair (Doorstep Service):**
     - All brands & models
     - Manual, electric, domestic & industrial machines
     - Belt issues, motor problems, needle alignment, noise issues
  2. **🏭 Industrial Sewing Machine Repair:**
     - Factory & tailoring unit machines
     - On-site repair available
     - Preventive maintenance
  3. **🧵 New Sewing Machine Sales:**
     - Branded machines
     - Suitable for home & tailoring shops
     - Home delivery available
  4. **♻️ Second-Hand Sewing Machines:**
     - Fully checked & serviced
     - Budget-friendly options
     - Home delivery available
- Display fallback message "No services available" when data is empty or loading fails

#### Experience & Trust Section
- "Why Choose Us?" section containing five trust items fetched from backend:
  - ✅ 22+ Years of Experience
  - ✅ Doorstep Service Available
  - ✅ Honest Pricing
  - ✅ Quick Response
  - ✅ Trusted by Tailors & Homes
- Display fallback message "No information available" when data is empty or loading fails

### Contact Page
- Enhanced call-to-action section with urgent messaging: "Book a Service Today" button
- Prominently display business phone number **9980481645** with call icon styling under CTA button
- Clear "Call Now" button using tel: link that initiates phone call when tapped
- "Chat on WhatsApp" button linking to `https://wa.me/919980481645`
- Contact information and business hours
- Service Areas section with heading "Service Areas" and description: "We provide sewing machine repair and delivery services across nearby areas. Call us to check availability in your location."
- Service location with embedded map showing exact coordinates **12°50'04.9"N 77°29'09.6"E** labeled as "Service Location"
- Clean, responsive design with easy-to-find contact options

### Service Area Map
- Interactive map showing the general service coverage area
- Visual representation of service boundaries
- Specific service location marker at coordinates **12°50'04.9"N 77°29'09.6"E**

### Machine Gallery
- Photo gallery displaying all available sewing machine images:
  - Home sewing setup images
  - Industrial sewing machines
  - Mechanic at work photos
  - Modern sewing machines
  - Repair process closeups
  - Collections of various sewing machines
  - Vintage sewing machines
- Images represent different types of machines: new, second-hand, industrial, vintage
- Basic image viewing functionality with responsive display

### Footer
- Prominently display business phone number **9980481645**
- "Chat on WhatsApp" button linking to `https://wa.me/919980481645`
- Quick contact options available on all pages

## Data Storage
The backend stores:
- Service information and descriptions
- Detailed service list with four service categories, each containing title, emoji, and bullet points
- Experience and trust information with five specific trust items
- Pricing data
- Contact details including phone number **9980481645**
- Machine inventory with photos
- Service area boundaries and description text
- Service location coordinates **12°50'04.9"N 77°29'09.6"E**
- Enhanced call-to-action content and messaging variations

## Backend Operations
- Automatically initialize data on deployment through `initialize()` function that must be called during canister installation
- Ensure `detailedServices` and `experienceTrustItems` are properly populated during initialization
- Implement fallback mechanism in query functions to return default data if stored data is empty
- Retrieve service listings and prices
- Provide detailed service information through `getAllDetailedServices()` query returning four service categories with emojis and bullet points, with fallback to default data if empty
- Retrieve experience and trust section data through `getAllExperienceTrustItems()` query returning five trust items, with fallback to default data if empty
- Manage machine inventory
- Store and retrieve contact information including phone and WhatsApp details
- Handle service area data, description text, and specific location coordinates for map display
- Provide location data for embedded map components
- Provide enhanced call-to-action content and messaging variations for different pages
- Ensure backend initialization is robust and data is always available for frontend queries

## Frontend Requirements
- Services Page must properly render detailed service cards from `getAllDetailedServices()` backend query
- Services Page must display "Why Choose Us" trust items from `getAllExperienceTrustItems()` backend query
- Ensure all four detailed service cards appear under "Detailed Service List" section with proper emojis and bullet points
- Ensure all five trust items appear under "Why Choose Us" section with checkmark styling
- Verify proper data fetching and rendering on the published site
- Implement useQueries hooks that properly trigger data loading
- Display fallback UI messages when data is empty or unavailable:
  - "No services available" for empty detailed services
  - "No information available" for empty trust items
- Ensure dynamic data fetching and rendering from backend queries

## Design Requirements
- Consistent styling with warm brown/orange theme
- Responsive layout for all devices
- Content in English language
- Call icon styling for phone number displays
- Enhanced urgency in call-to-action button styling and messaging
- Production-ready deployment configuration
- Clear fallback UI styling for empty data states
