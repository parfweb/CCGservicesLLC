export interface Lead {
    businessName: string;
    phone: string;
    website: string;
    techStack: string;
    priority: 'GOLD' | 'SILVER' | 'BRONZE' | 'Low';
    status: string;
    email?: string;
    socials?: string;
    rating?: number;
    reviews?: number;
    address?: string;
    auditNotes?: string;
    screenshotUrl?: string;
    specificObservation?: string;
    industry?: string;
    analysis?: {
        analyzedAt: string;
        status: string;
        loadTime: string;
        server: string;
        pageTitle: string;
        linkCount: number;
        screenshotUrl: string;
        pdfPath: string;
        isUgly: boolean;
        isThin: boolean;
        isFreeProvider?: boolean;
    };
}

const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const INDUSTRY_MAP: Record<string, string> = {
    'electric': 'electrician',
    'electrical': 'electrician',
    'plumb': 'plumber',
    'plumbing': 'plumber',
    'hvac': 'HVAC specialist',
    'heating': 'heating pro',
    'cooling': 'HVAC pro',
    'clean': 'cleaning pro',
    'cleaning': 'cleaning pro',
    'landscap': 'landscaper',
    'lawn': 'lawn care pro',
    'paint': 'painter',
    'roof': 'roofer',
    'floor': 'flooring pro',
    'tile': 'tile specialist',
    'nail': 'nail salon',
    'salon': 'salon',
    'spa': 'spa',
    'auto': 'auto shop',
    'mechanic': 'mechanic',
    'restaurant': 'restaurant',
    'construct': 'contractor',
    'contract': 'contractor',
    'remodel': 'remodeler',
    'handyman': 'handyman',
    'moving': 'mover',
    'pest': 'pest control',
    'tree': 'tree service',
    'pool': 'pool service',
    'garage': 'garage door pro',
    'window': 'window specialist',
    'solar': 'solar installer',
    'security': 'security pro',
    'locksmith': 'locksmith',
    'carpet': 'carpet cleaner',
    'pressure': 'pressure washer',
    'junk': 'junk removal',
    'demolition': 'demolition pro',
    'concrete': 'concrete pro',
    'mason': 'mason',
    'fence': 'fencing pro',
    'deck': 'deck builder',
    'kitchen': 'kitchen specialist',
    'bath': 'bathroom specialist',
    'siding': 'siding pro',
    'gutter': 'gutter specialist',
    'chimney': 'chimney sweep',
    'appliance': 'appliance repair',
    'water': 'water damage pro',
    'fire': 'fire restoration',
    'mold': 'mold remediation',
    'insulation': 'insulation pro',
    'drywall': 'drywall pro',
    'stucco': 'stucco pro',
    'paving': 'paving pro',
    'asphalt': 'paving pro'
};

const extractIndustry = (lead: Lead): string => {
    if (lead.industry && lead.industry !== 'Service Pro') {
        return lead.industry.toLowerCase();
    }
    const name = lead.businessName.toLowerCase();
    for (const [keyword, industry] of Object.entries(INDUSTRY_MAP)) {
        if (name.includes(keyword)) {
            return industry;
        }
    }
    return 'local business';
};

const getSubject = (businessName: string, type: 'bad' | 'none' | 'good'): string => {
    const subjects = {
        bad: [
            `Quick question about ${businessName}`,
            `${businessName} - just a thought`,
            `Idea for ${businessName}`,
            `Noticed something about ${businessName}`,
            `${businessName}: quick opportunity?`,
            `Thinking about ${businessName}`,
        ],
        none: [
            `Quick idea for ${businessName}`,
            `${businessName} - missed opportunity?`,
            `Thought about ${businessName}`,
            `${businessName}: online presence idea`,
        ],
        good: [
            `Hey from a fellow business owner`,
            `${businessName} - quick thought`,
            `Growth idea for ${businessName}`,
            `Quick thought for ${businessName}`,
        ],
    };
    return pick(subjects[type]);
};

const getOpener = (businessName: string, industry: string): string => {
    const openers = [
        `Was looking at some ${industry}s in your area and your business caught my eye.`,
        `Hope you're having a great week! I stumbled on ${businessName} recently.`,
        `I found ${businessName} while doing some research and had a quick thought.`,
        `Hey - I came across your business online and wanted to say hi.`,
        `I was checking out ${industry}s nearby and noticed ${businessName}.`,
    ];
    return pick(openers);
};

const getBadWebsiteProblem = (): string => {
    const problems = [
        `I took a look at your website and noticed a few things that might be holding you back - slow load times, mobile issues, or missed SEO opportunities.`,
        `Your site has potential, but it looks like it could use some updates to really compete in today's market.`,
        `I noticed your website might not be fully optimized for mobile or search engines, which can cost you customers.`,
        `When I checked your site, a few things stood out that might be hurting your visibility online.`,
        `Your website is the first thing most customers see - and right now, it might not be making the best impression.`,
    ];
    return pick(problems);
};



const getStat = (): string => {
    const stats = [
        `75% of people judge a business's credibility just by their website.`,
        `Most customers check a business online before ever picking up the phone.`,
        `Studies show mobile users leave slow sites within 3 seconds.`,
        `A bad website experience costs businesses about 88% of potential customers.`,
        `Local businesses with modern websites see 2-3x more leads on average.`,
    ];
    return pick(stats);
};

const getPitch = (industry: string): string => {
    const pitches = [
        `I run a small web agency based right here in New York. We create sites for local ${industry}s that actually bring in leads.`,
        `I'm a developer here in New York and I help local service businesses get more calls with simple, modern websites.`,
        `We're a small NY-based team that builds websites for local businesses like yours - nothing fancy, just sites that work.`,
        `I work with a lot of ${industry}s in the area. We make sites that are easy to find and easy to use.`,
        `CCG SiteSpark is my small agency based in New York. We help local businesses get found online.`,
    ];
    return pick(pitches);
};

const getCTA = (): string => {
    const signature = `Best,\nGianni Asaro\ngianniasaro@ccgsitespark.com\nCCG SiteSpark`;

    const ctas = [
        `Would you be open to a quick 10-minute call to see if we can help?\n\nNo pressure either way - just thought I'd reach out.\n\n${signature}`,
        `If you're curious, I'd be happy to show you what we could do.\n\nLet me know if you'd like to chat!\n\n${signature}`,
        `Happy to share some ideas if you're interested. No obligation, just a conversation.\n\n${signature}`,
        `Let me know if you'd like to find 15 minutes to talk. If not, totally cool!\n\n${signature}`,
        `Would love to chat if you're open to it. Either way, good luck with everything!\n\n${signature}`,
    ];
    return pick(ctas);
};

export const generatePitch = (lead: Lead): { subject: string; body: string } => {
    const industry = extractIndustry(lead);
    const businessName = lead.businessName;
    const analysis = lead.analysis;

    let subject: string;
    let body: string;

    // 1. Broken / Offline
    if (lead.status.includes('BROKEN') || (analysis && analysis.status === 'BROKEN')) {
        subject = `Quick question about your website`;
        body = `Hi,\n\nI tried to visit your website today and it looks like it's actually down right now.\n\nI'm a developer based here in New York and I can help get this back up for you today if you need a hand.\n\n${getCTA()}`;
        return { subject, body };
    }

    // 2. Ugly / Unfinished (New Logic)
    if (analysis && (analysis.isUgly || analysis.isThin)) {
        subject = `I noticed something on your website`;
        body = `Hi,\n\nI visited your website today but noticed it looks a bit unfinished in some spots.\n\nI'm over in New York and I've seen how much first impressions matter for local businesses. If a customer sees something off, they usually just move on to the next person.\n\nHappy to help you clean this up if you're interested.\n\n${getCTA()}`;
        return { subject, body };
    }

    // 3. Mobile / Tech Stack Issues
    if (
        lead.status.includes('NOT MOBILE') ||
        lead.techStack?.toLowerCase().includes('wix') ||
        lead.techStack?.toLowerCase().includes('godaddy')
    ) {
        subject = getSubject(businessName, 'bad');
        body = `${getOpener(businessName, industry)}\n\n${getBadWebsiteProblem()}\n\n${getStat()}\n\n${getPitch(industry)}\n\n${getCTA()}`;
    } else {
        // 4. Good Site (Organic NY Approach - Direct but Friendly)
        subject = getSubject(businessName, 'good');

        body = `${getOpener(businessName, industry)}\n\nI took a look at your website and noticed a few things that could be costing you customers. Things like how it shows up on Google, how fast it loads, how it looks on phones - the stuff that makes people either call you or click away.\n\nI'm a developer based in New York and I work with a lot of local businesses on exactly this kind of thing.\n\n${getCTA()}`;
    }

    return { subject, body };
};
