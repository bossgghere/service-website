import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMergedImages, PLACEHOLDER_IMAGE } from '../content/siteImages';

const SERVICE_CONTENT: Record<
  string,
  {
    title: string;
    subtitle: string;
    heroImage: string;
    sections: { title?: string; content?: string; list?: string[]; image?: string }[];
  }
> = {
  'software-development': {
    title: 'IT Development',
    subtitle: 'Comprehensive software development and lifecycle management for enterprise platforms.',
    heroImage: PLACEHOLDER_IMAGE,
    sections: [
      {
        content:
          'IT development incorporates all the resources used to develop and manage a platform or software. When using services, third-party assistance can be brought on to aid in the completion of projects, or any of the various tasks required for the completion of software. Some of those services include QA testing, business solutions, migration, application development, and application maintenance.',
      },
      {
        content:
          'It is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. Software development is a process of writing and maintaining the source code, but in a broader sense, it includes all that is involved between the conception of the desired software through to the final manifestation of the software, sometimes in a planned and structured process.',
        image: PLACEHOLDER_IMAGE,
      },
      {
        title: 'Software Development Processes',
        list: [
          'Analysis and Planning',
          'Requirements',
          'Designing and Prototyping',
          'Software Development & Implementation',
          'Testing',
          'Deployment',
          'Operation and Maintenance',
        ],
      },
      {
        title: 'Requirements',
        content:
          "Requirements and customer needs are always on the run. And as people begin to use your software, they'll undoubtedly find bugs, request new features to be added, and ask for more or different functionality. Not to mention the basic upkeep and maintenance of your software to ensure uptime and customer satisfaction. Our programmers will carry out periodic maintenance in order to ensure programs can run smoothly and keep up with other apps of the same use overtime.",
        image: PLACEHOLDER_IMAGE,
      },
      {
        title: '1. Product-based company',
        content:
          "These are businesses that work on their own products and deliver them to end-users, which can be both businesses and individual customers. Such companies invest time and money into developing the out-of-the-box solutions which they can later configure and implement on the client's side. They create software which can be later used by other companies to solve different business problems.",
      },
      {
        title: '2. Service-based company',
        content:
          'Companies work directly for businesses and provide them with a wide range of services – for example, development of custom software projects or delivery of technical expertise in the form of team extension/augmentation, dedicated teams, or project teams.',
      },
    ],
  },
  'cloud-architecture': {
    title: 'Cloud Services',
    subtitle: 'Scalable cloud infrastructure and managed services across AWS, Azure, and GCP.',
    heroImage: PLACEHOLDER_IMAGE,
    sections: [
      {
        content:
          'The cloud is a versatile platform capable of supporting numerous virtual services, such as operating systems and programs. Cloud backups are one part of the service model too, allowing users and companies to store their important information on external cloud servers, circumventing hardware failure or other problems. Cloud backup is typically handled by service providers for monthly/annual fees.',
      },
      {
        content:
          'AWS, Azure, GCP are the cloud platforms, for public and private use. This platform offers a robust array of options for development, IoT, analytics, security, and more. It\'s highly popular because these charge based on use (pay as you go) instead of a flat fee, which is a good flexible choice for businesses with limited financial capital.',
        image: PLACEHOLDER_IMAGE,
      },
      {
        title: 'Key Advantages',
        list: [
          'The ability to scale — Because the cloud service provider supplies all necessary infrastructure and software, there\'s no need for a company to invest in its own resources or allocate extra IT staff to manage the service. This, in turn, makes it easy for the business to scale the solution as user needs change.',
          'Lowered costs — Many cloud services are provided on a monthly or annual subscription basis, eliminating the need to pay for on-premises software licenses. This allows organizations to access software, storage, and other services without having to invest in the underlying infrastructure or handle maintenance and upgrades.',
          'Increased flexibility — With cloud services, companies can procure services on an on-demand, as-needed basis. When there\'s no longer a need for a particular application or platform, the business can simply cancel the subscription or shut down the service.',
        ],
      },
      {
        title: 'Cloud Services we provide',
        content: '',
      },
      {
        title: 'Software as a Service (SaaS)',
        content:
          'The most widely recognized type of cloud service is known as software as a service, or SaaS. This broad category encompasses a variety of services, such as file storage and backup, web-based email and project management tools. Examples of SaaS cloud service providers include Dropbox, G Suite, Microsoft Office 365, Slack and Citrix Content Collaboration. In each of these applications, users can access, share, store and secure information in the cloud.',
      },
      {
        title: 'Infrastructure as a Service (IaaS)',
        content:
          'Infrastructure as a service, or IaaS, provides the infrastructure that many cloud service providers need to manage SaaS tools, but don\'t want to maintain themselves. It serves as the complete data center framework, eliminating the need for resource-intensive, on-site installations. Examples of IaaS are Amazon Web Services (AWS), Microsoft Azure and Google Compute Engine. These providers maintain all storage servers and networking hardware, and may also offer load balancing, application firewalls and more. Many well-known SaaS providers run on IaaS platforms.',
        image: PLACEHOLDER_IMAGE,
      },
      {
        title: 'Platform as a Service (PaaS)',
        content:
          'The cloud service model known as platform as a service, or PaaS, serves as a web-based environment where developers can build cloud apps. PaaS provides a database, operating system and programming language that organizations can use to develop cloud-based software, without having to maintain the underlying elements.',
      },
      {
        content:
          'As the availability of cloud services continues to expand, whether the company chooses to extend existing on-premises software deployments or move 100% to the cloud, these services will continue to simplify how organizations deliver mission-critical apps and data to the workforce. From content collaboration and access control for employees to app delivery management and virtual desktop solutions for IT, plus a vast array of options in between, cloud services are transforming how people work and the ways businesses operate.',
      },
    ],
  },
  'data-analytics': {
    title: 'Data Analytics',
    subtitle: 'Analyzing and digesting data for company use — big data, IoT, and actionable reports.',
    heroImage: PLACEHOLDER_IMAGE,
    sections: [
      {
        content:
          'Services which incorporate the act of analyzing and digesting data for company use, data analytics will typically involve concepts like "big data" and IoT (the Internet of Things). Involves specialists and services which process information for a company in order to produce usable reports. These reports utilize anything beneficial to the business.',
      },
      {
        content:
          'Data analysts exist at the intersection of information technology, statistics and business. They combine these fields in order to help businesses and organizations succeed. The primary goal of a data analyst is to increase efficiency and improve performance by discovering patterns in data.',
        image: PLACEHOLDER_IMAGE,
      },
      {
        title: 'Why Choose Us',
        content:
          'The work of a data analyst involves working with data throughout the data analysis pipeline. This means working with data in various ways. The primary steps in the data analytics process are data mining, data management, statistical analysis, and data presentation. The importance and balance of these steps depend on the data being used and the goal of the analysis.',
      },
      {
        title: 'Data mining',
        content:
          'Data mining is an essential process for many data analytics tasks. This involves extracting data from unstructured data sources. These may include written text, large complex databases, or raw sensor data. The key steps in this process are to extract, transform, and load data (often called ETL.) These steps convert raw data into a useful and manageable format. This prepares data for storage and analysis. Data mining is generally the most time-intensive step in the data analysis pipeline.',
      },
      {
        title: 'Data management',
        content:
          "Data management or data warehousing is another key aspect of a data analyst's job. Data warehousing involves designing and implementing databases that allow easy access to the results of data mining. This step generally involves creating and managing SQL databases. Non-relational and NoSQL databases are becoming more common as well.",
      },
      {
        title: 'Statistical analysis',
        content:
          'Statistical analysis allows analysts to create insights from data. Both statistics and machine learning techniques are used to analyze data. Big data is used to create statistical models that reveal trends in data. These models can then be applied to new data to make predictions and inform decision making. Statistical programming languages such as R or Python (with pandas) are essential to this process. In addition, open-source libraries and packages such as TensorFlow enable advanced analysis.',
        image: PLACEHOLDER_IMAGE,
      },
    ],
  },
  'business-intelligence': {
    title: 'Business Intelligence',
    subtitle: 'Transform data into meaningful reports and insights for better business decisions.',
    heroImage: PLACEHOLDER_IMAGE,
    sections: [
      {
        content:
          'Big data plays an enormous role in business success. The downpour of information available to a given company is tremendous and how it\'s acquired depends on the tool used. Services that encompass business intelligence analyze, extract, and transform this flood of info into meaningful reports. Anything from financial costs to click-through rates on an article at a certain time of day fall under the umbrella of modern business intelligence.',
      },
      {
        content:
          'Business intelligence is to improve an organization\'s business operations through the use of relevant data. Companies that effectively employ BI tools and techniques can translate their collected data into valuable insights about their business processes and strategies. Such insights can then be used to make better business decisions that increase productivity and revenue, leading to accelerated business growth and higher profits.',
        image: PLACEHOLDER_IMAGE,
      },
      {
        content:
          "Without BI, organizations can't readily take advantage of data-driven decision-making. Instead, executives and workers are primarily left to base important business decisions on other factors, such as accumulated knowledge, previous experiences, intuition and gut feelings. While those methods can result in good decisions, they're also fraught with the potential for errors and missteps because of the lack of data underpinning them.",
      },
      {
        title: 'Benefits',
        content:
          'A successful BI program produces a variety of business benefits in an organization. For example, BI enables C-suite executives and department managers to monitor business performance on an ongoing basis so they can act quickly when issues or opportunities arise. Analyzing customer data helps make marketing, sales and customer service efforts more effective. Supply chain, manufacturing and distribution bottlenecks can be detected before they cause financial harm. HR managers are better able to monitor employee productivity, labor costs and other workforce data.',
      },
      {
        title: 'Overall, the key benefits that businesses can get from BI applications include the ability to:',
        list: [
          'Speed up and improve decision-making.',
          'Optimize internal business processes.',
          'Increase operational efficiency and productivity.',
          'Spot business problems that need to be addressed.',
          'Identify emerging business and market trends.',
          'Develop stronger business strategies.',
          'Drive higher sales and new revenues; and',
          'Gain a competitive edge over rival companies.',
        ],
      },
      {
        content:
          'BI initiatives also provide narrower business benefits — among them, making it easier for project managers to track the status of business projects and for organizations to gather competitive intelligence on their rivals. In addition, BI, data management and IT teams themselves benefit from business intelligence, using it to analyze various aspects of technology and analytics operations.',
      },
      {
        title: 'BI Technologies',
        list: [
          'Ad hoc analysis.',
          'Online analytical processing (OLAP).',
          'Mobile BI.',
          'Real-time BI.',
          'Operational intelligence (OI).',
          'Software-as-a-service BI.',
          'Open source BI (OSBI).',
          'Embedded BI.',
          'Collaborative BI.',
          'Location intelligence (LI).',
        ],
      },
    ],
  },
  'cyber-security': {
    title: 'Cyber Security',
    subtitle: 'Protecting networks and data from malicious attacks with comprehensive security services.',
    heroImage: PLACEHOLDER_IMAGE,
    sections: [
      {
        content:
          'A broad category involving all service types falling under the umbrella of cyber security. In IT, it is the act of protecting networks and data from malicious attacks by deploying a variety of methods, from network monitoring, firewalls, anti-virus, layered networks, and more. Often managed through a provider, it can also be handled on-site. Cyber security services are valuable as they draw from larger resources and more experienced staff.',
      },
      {
        content:
          'Firewalls are a common, integral part of any cybersecurity plan. Most companies handle their own or have a firewall for their network – but in some cases will elect a third party for additional firewall options. Options vary based on the provider.',
      },
      {
        content:
          'Some firewalls are hybrid models, for instance, which allow for additional control and network monitoring options outside of the normal rulesets. Others may provide a single firewall solution for all internal/remote devices. The needs differ based on the requirements of each individual company.',
        image: PLACEHOLDER_IMAGE,
      },
      {
        title: "It's Importance",
        content:
          'It is important because government, military, corporate, financial, and medical organizations collect, process, and store unprecedented amounts of data on computers and other devices. A significant portion of that data can be sensitive information, whether that be intellectual property, financial data, personal information, or other types of data for which unauthorized access or exposure could have negative consequences.',
      },
      {
        content:
          'Organizations transmit sensitive data across networks and to other devices in the course of doing businesses, and cyber security describes the discipline dedicated to protecting that information and the systems used to process or store it. As the volume and sophistication of cyber-attacks grow, companies and organizations, especially those that are tasked with safeguarding information relating to national security, health, or financial records, need to take steps to protect their sensitive business and personnel information.',
      },
      {
        title: 'Challenges',
        content:
          'For an effective cyber security, an organization needs to coordinate its efforts throughout its entire information system. Elements of cyber encompass all the following:',
      },
      {
        list: [
          'Network security: The process of protecting the network from unwanted users, attacks, and intrusions.',
          'Application security: Apps require constant updates and testing to ensure these programs are secure from attacks.',
          'Endpoint security: Remote access is a necessary part of business but can also be a weak point for data. Endpoint security is the process of protecting remote access to a company\'s network.',
          'Data security: Inside of networks and applications is data. Protecting company and customer information is a separate layer of security.',
          'Identity management: Essentially, this is a process of understanding the access every individual has in an organization.',
          'Database and infrastructure security: Everything in a network involves databases and physical equipment. Protecting these devices is equally important.',
          'Cloud security: Many files are in digital environments or "the cloud". Protecting data in a 100% online environment presents a large amount of challenges.',
          'Mobile security: Cell phones and tablets involve virtually every type of security challenge in and of themselves.',
          'Disaster recovery/business continuity planning: In the event of a breach, natural disaster or other event data must be protected and business must go on. For this, you\'ll need a plan.',
          'End-user education: Users may be employees accessing the network or customers logging on to a company app. Educating good habits (password changes, 2-factor authentication, etc.) is an important part of cyber security.',
        ],
      },
      {
        title: 'Managing Cyber Security',
        content:
          'Cyber risk assessments should also consider any regulations that impact the way your company collects, stores, and secures data, such as PCI-DSS, HIPAA, SOX, FISMA, and others. Following a cyber risk assessment, develop and implement a plan to mitigate cyber risk, protect the "crown jewels" outlined in your assessment, and effectively detect and respond to security incidents. This plan should encompass both the processes and technologies required to build a mature cyber security program.',
        image: PLACEHOLDER_IMAGE,
      },
    ],
  },
  'networking-services': {
    title: 'Networking Services',
    subtitle: 'Network infrastructure, SD-WAN, and managed network services for enterprise success.',
    heroImage: PLACEHOLDER_IMAGE,
    sections: [
      {
        content:
          'Networking IT services encompasses everything for the successful implementation of a company network. This involves the building of network infrastructure, the setup of devices like LAN routers and modems, the layout of the networks (such as breaking a network into different tiers), security, optimization, and many other factors. Often a business will build this on-site, however, if local IT experts are insufficient (or unavailable) then third parties are used for the proper implementation of services.',
      },
      {
        content:
          'It will require enterprises to adopt key 3rd Platform technologies such as cloud, Internet of Things (IoT), mobility, and artificial intelligence/machine learning (AI/ML). The adoption of these technologies has elevated the wide area network (WAN) as a strategic initiative for enterprises. This is further underscored by market transformations that demand an agile WAN architecture, including:',
        image: PLACEHOLDER_IMAGE,
      },
      {
        list: [
          'The accelerating growth of global IP traffic, estimated at a CAGR of 40%, is impacting the economics of network expansion.',
          'The proliferation of IoT and growth of global ecommerce are moving intelligence to the edge.',
          'The continued adoption of the cloud is transforming WANs.',
          'The increasing demand for rich media by customers is driving higher bandwidth at the branch.',
        ],
      },
      {
        content:
          'Responding to these transformational forces will require an adaptable WAN architecture. Advanced networking at the branch is hence key to business agility and enterprise success measured in terms of improved employee productivity, customer satisfaction, and revenue growth. This demands a paradigm shift from reliance on discrete networking appliances toward a more agile software-defined and virtualized networking architecture. Enterprises are rapidly embracing software-defined WAN (SD-WAN) as the technology of choice for upgrading their current legacy WAN environment. In real deployments, SD-WAN has been proven to support direct and secure access to cloud applications, provide cost-effective growth in bandwidth, and improve network availability.',
      },
      {
        content:
          'The choice of managed network services further complements the technical benefits of this new architecture with a commercial framework that provides full life-cycle advantages. Integrating a software-defined architecture presents deployment challenges for enterprises that are considering a do-it-yourself approach. Foremost are lack of technical resources and managing integration complexities. Besides de-risking SD-WAN deployment, a managed services provider can bring significant commercial benefits including a cloud consumption model, integration of full-scale security capabilities, uniform service-level agreements (SLAs), access to pretested multivendor virtual functions, integrated self-service portals, and global reach. Further innovation in virtualized network services has been embraced by key participants such as communications service providers and vendors toward a fully automated and intent-based networking architecture. Enterprises will benefit considerably from these investments as they strive to enrich customer experience by incorporating modern AI and ML tools.',
      },
      {
        content:
          'It makes the case that managed network services bring significant benefits to enterprises as they undertake the journey toward a software-defined networking implementation.',
      },
    ],
  },
};

const ServiceDetailPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const slug = location.pathname.replace(/^\//, '');
  const content = slug ? SERVICE_CONTENT[slug] : null;
  const serviceImages = slug ? getMergedImages().services[slug as keyof ReturnType<typeof getMergedImages>['services']] : null;

  const displayContent = useMemo(() => {
    if (!content) return null;
    let sectionImgIdx = 0;
    const sections = content.sections.map((sec) => {
      if (sec.image != null) {
        const url = serviceImages?.sectionImages?.[sectionImgIdx] ?? sec.image;
        sectionImgIdx++;
        return { ...sec, image: url };
      }
      return sec;
    });
    return {
      ...content,
      heroImage: serviceImages?.hero ?? content.heroImage,
      sections,
    };
  }, [content, serviceImages]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!displayContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-8">
          <h1 className="text-4xl font-black uppercase mb-4">Service not found</h1>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-[#2176ff] transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const c = displayContent;
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Hero */}
      <section className="bg-black text-white pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 sm:px-8 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 wireframe-bg opacity-10 pointer-events-none" />
        <div className="absolute inset-0">
          <img
            src={c.heroImage}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 min-w-0">
          <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] uppercase mb-6 sm:mb-8 block">
            Service
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 sm:mb-8">
            {c.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-300 max-w-2xl leading-relaxed">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-24 min-w-0">
        {c.sections.map((section, idx) => (
          <div key={idx} className="mb-12 sm:mb-20 md:mb-28">
            {section.title && (
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-black border-b-2 border-[#2176ff] pb-3 inline-block">
                {section.title}
              </h2>
            )}
            {section.content && (
              <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-8">
                {section.content}
              </p>
            )}
            {section.list && (
              <ul className="space-y-3 mb-8">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2176ff] mt-2.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.image && (
              <div className="rounded-lg overflow-hidden border border-neutral-200 shadow-lg my-8">
                <img
                  src={section.image}
                  alt=""
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-neutral-50 border-t border-neutral-100 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 sm:mb-8">
          Ready to get started?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="min-h-[44px] px-8 sm:px-10 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#2176ff] transition-all"
          >
            View all services
          </button>
          <button
            type="button"
            onClick={() => {
              navigate('/');
              setTimeout(() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }), 200);
            }}
            className="min-h-[44px] px-8 sm:px-10 py-4 border-2 border-black text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
          >
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
