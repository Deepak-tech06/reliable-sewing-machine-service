import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import List "mo:core/List";
import Iter "mo:core/Iter";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";

actor {
  include MixinStorage();

  type Service = {
    id : Text;
    name : Text;
    description : Text;
    price : ?Nat;
  };

  module Service {
    public func compare(service1 : Service, service2 : Service) : Order.Order {
      Text.compare(service1.name, service2.name);
    };
  };

  type Machine = {
    id : Text;
    name : Text;
    price : Nat;
    isNew : Bool;
    photo : Storage.ExternalBlob;
    description : Text;
  };

  module Machine {
    public func compare(machine1 : Machine, machine2 : Machine) : Order.Order {
      Text.compare(machine1.id, machine2.id);
    };
  };

  type ContactInfo = {
    phoneNumber : Text;
    whatsappNumber : Text;
    businessHours : Text;
  };

  type ServiceArea = {
    areaName : Text;
    coordinates : [Text];
  };

  type LocationCoordinates = {
    latitude : Text;
    longitude : Text;
  };

  type DetailedService = {
    id : Text;
    emoji : Text;
    title : Text;
    description : Text;
    bulletPoints : [Text];
  };

  type ExperienceTrustItem = {
    emoji : Text;
    description : Text;
  };

  type CallToActionContent = {
    buttonText : Text;
    subheading : Text;
    phoneNumber : Text;
    whatsappLink : Text;
    urgencyMessage : Text;
  };

  let services = Map.empty<Text, Service>();
  let machines = Map.empty<Text, Machine>();
  let serviceAreas = List.empty<ServiceArea>();

  var contactInfo : ContactInfo = {
    phoneNumber = "9980481645";
    whatsappNumber = "9980481645";
    businessHours = "Mon-Fri 9am-5pm";
  };

  var serviceLocation : LocationCoordinates = {
    latitude = "12°50&apos;04.9&quot;N";
    longitude = "77°29&apos;09.6&quot;E";
  };

  let detailedServices = Map.empty<Text, DetailedService>();
  var experienceTrustItems = List.empty<ExperienceTrustItem>();

  func initialize() {
    let defaultServices = [
      {
        id = "repairs";
        name = "Sewing Machine Repairs";
        description = "Expert repairs for all types of sewing machines.";
        price = null;
      },
      {
        id = "new_machines";
        name = "New Sewing Machines";
        description = "Wide range of new sewing machines for sale.";
        price = null;
      },
      {
        id = "second_hand";
        name = "Second-Hand Machines";
        description = "Quality pre-owned sewing machines available.";
        price = null;
      },
      {
        id = "home_delivery";
        name = "Home Delivery";
        description = "Convenient home delivery service for purchased machines.";
        price = null;
      },
    ];

    for (service in defaultServices.values()) {
      services.add(service.id, service);
    };

    let detailedServiceList = [
      {
        id = "repair";
        emoji = "🛠️";
        title = "Repair";
        description = "Comprehensive repair services for all types of sewing machines.";
        bulletPoints = [
          "Quick diagnostics",
          "Certified technicians",
          "Doorstep service",
        ];
      },
      {
        id = "industrial_repair";
        emoji = "🏭";
        title = "Industrial Repair";
        description = "Specialized repair services for industrial sewing machines.";
        bulletPoints = [
          "Expert handling of heavy machinery",
          "Prompt service",
          "Genuine spare parts",
        ];
      },
      {
        id = "new_machines";
        emoji = "🆕";
        title = "New Machines";
        description = "Explore our wide selection of new sewing machines.";
        bulletPoints = [
          "Latest models from top brands",
          "Competitive prices",
          "Expert guidance",
        ];
      },
      {
        id = "second_hand";
        emoji = "♻️";
        title = "Second-Hand Machines";
        description = "Quality pre-owned sewing machines.";
        bulletPoints = [
          "Affordable pricing",
          "Well-maintained machines",
          "Warranty included",
        ];
      },
    ];

    for (detailedService in detailedServiceList.values()) {
      detailedServices.add(detailedService.id, detailedService);
    };

    let experienceTrustList = [
      {
        emoji = "💼";
        description = "20+ Years of Experience";
      },
      {
        emoji = "🚚";
        description = "Doorstep Service";
      },
      {
        emoji = "💰";
        description = "Honest Pricing";
      },
      {
        emoji = "⚡";
        description = "Quick Response";
      },
      {
        emoji = "🙏";
        description = "Trusted by Tailors";
      },
    ];

    for (trustItem in experienceTrustList.values()) {
      experienceTrustItems.add(trustItem);
    };
  };

  public query ({ caller }) func getService(id : Text) : async ?Service {
    services.get(id);
  };

  public query ({ caller }) func getAllServices() : async [Service] {
    services.values().toArray().sort();
  };

  public shared ({ caller }) func addService(id : Text, name : Text, description : Text, price : ?Nat) : async () {
    let service : Service = {
      id;
      name;
      description;
      price;
    };
    services.add(id, service);
  };

  public query ({ caller }) func getMachine(id : Text) : async ?Machine {
    machines.get(id);
  };

  public query ({ caller }) func getAllMachines() : async [Machine] {
    machines.values().toArray().sort();
  };

  public shared ({ caller }) func addMachine(id : Text, name : Text, price : Nat, isNew : Bool, photo : Storage.ExternalBlob, description : Text) : async () {
    let machine : Machine = {
      id;
      name;
      price;
      isNew;
      photo;
      description;
    };
    machines.add(id, machine);
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    contactInfo;
  };

  public shared ({ caller }) func updateContactInfo(phoneNumber : Text, whatsappNumber : Text, businessHours : Text) : async () {
    contactInfo := {
      phoneNumber;
      whatsappNumber;
      businessHours;
    };
  };

  public query ({ caller }) func getServiceAreas() : async [ServiceArea] {
    serviceAreas.toArray();
  };

  public shared ({ caller }) func addServiceArea(areaName : Text, coordinates : [Text]) : async () {
    serviceAreas.add({
      areaName;
      coordinates;
    });
  };

  public query ({ caller }) func getServiceLocation() : async LocationCoordinates {
    serviceLocation;
  };

  public shared ({ caller }) func updateServiceLocation(latitude : Text, longitude : Text) : async () {
    serviceLocation := {
      latitude;
      longitude;
    };
  };

  public query ({ caller }) func searchServices(term : Text) : async [Service] {
    services.values().toArray().filter(
      func(service) {
        service.name.contains(#text(term));
      }
    );
  };

  public query ({ caller }) func searchMachines(term : Text) : async [Machine] {
    machines.values().toArray().filter(
      func(machine) {
        machine.name.contains(#text(term));
      }
    );
  };

  public query ({ caller }) func getMachinesWithPhotos() : async [Machine] {
    machines.values().toArray().sort();
  };

  public shared ({ caller }) func updateServicePrice(serviceId : Text, price : ?Nat) : async () {
    switch (services.get(serviceId)) {
      case (null) { Runtime.trap("Service not found") };
      case (?service) {
        let updatedService : Service = {
          id = service.id;
          name = service.name;
          description = service.description;
          price;
        };
        services.add(serviceId, updatedService);
      };
    };
  };

  public query ({ caller }) func getAllDetailedServices() : async [DetailedService] {
    if (detailedServices.size() == 0) {
      return [
        {
          id = "repair";
          emoji = "🛠️";
          title = "Repair";
          description = "Comprehensive repair services for all types of sewing machines.";
          bulletPoints = [
            "Quick diagnostics",
            "Certified technicians",
            "Doorstep service",
          ];
        },
        {
          id = "industrial_repair";
          emoji = "🏭";
          title = "Industrial Repair";
          description = "Specialized repair services for industrial sewing machines.";
          bulletPoints = [
            "Expert handling of heavy machinery",
            "Prompt service",
            "Genuine spare parts",
          ];
        },
        {
          id = "new_machines";
          emoji = "🆕";
          title = "New Machines";
          description = "Explore our wide selection of new sewing machines.";
          bulletPoints = [
            "Latest models from top brands",
            "Competitive prices",
            "Expert guidance",
          ];
        },
        {
          id = "second_hand";
          emoji = "♻️";
          title = "Second-Hand Machines";
          description = "Quality pre-owned sewing machines.";
          bulletPoints = [
            "Affordable pricing",
            "Well-maintained machines",
            "Warranty included",
          ];
        },
      ];
    };
    detailedServices.values().toArray();
  };

  public query ({ caller }) func getAllExperienceTrustItems() : async [ExperienceTrustItem] {
    if (experienceTrustItems.isEmpty()) {
      return [
        {
          emoji = "💼";
          description = "20+ Years of Experience";
        },
        {
          emoji = "🚚";
          description = "Doorstep Service";
        },
        {
          emoji = "💰";
          description = "Honest Pricing";
        },
        {
          emoji = "⚡";
          description = "Quick Response";
        },
        {
          emoji = "🙏";
          description = "Trusted by Tailors";
        },
      ];
    };
    experienceTrustItems.toArray();
  };

  public query ({ caller }) func getCallToActionContent(_key : Text) : async CallToActionContent {
    {
      buttonText = "Call Now for Doorstep Repair";
      subheading = "Need Immediate Sewing Machine Repair?";
      phoneNumber = "9980481645";
      whatsappLink = "https://wa.me/919980481645";
      urgencyMessage = "Book your repair today and get prompt doorstep service!";
    };
  };
};
