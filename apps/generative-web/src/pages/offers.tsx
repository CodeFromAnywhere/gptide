import { MarkdownContent } from "markdown";
import { Div } from "react-with-native";

/**

- Add tweet button on every page
- Ensure there's a good unfurling and page titles (SEO)
- Add a call to action saying something like "do you want my prompts? Click here" leading to `db.tsx"


 */

const content = `

# Offers

Great that you're interested in GPT Ideas! Please register for one of these packages in the form below.

## Free membership

- Get my basic prompts dataset for download, by email
- Daily or weekly knowledge-bomb in your inbox

[Sign up for free](/signup?tier=free)

## 

## 🏛 Indie membership 

- Community access
- GPT IDE access
- Coming soon: access to my premium prompts dataset and premium material

Price: $1000/year (or connect for collaborating as beta user)

[Sign up for indie membership](/signup?tier=indie) (you're not charged yet)

## 🚀 Startup membership

- 1:1 Consulting
- Relevant source codes to kickstart your startup
- Private resources for prompt engineering secrets

Price: Get in touch

[Apply for startup membership](/signup?tier=startup)

## 

## 🤑 Sponsoring, backing and investing..

- Get in contact with GPT-related startups in any sector, and see what they're building
- Invest in a hackathon for a specific category/usecase

Price: choose your amount, get in touch

[Sign up as sponsor](/signup?tier=sponsor)

## ❓ Questions? Feedback?

Please [email me](mailto:wijnand@karsens.com) and let's get in touch!



`;
export default () => {
  return (
    <Div className="max-lg:mx-4 lg:mx-20">
      <MarkdownContent config={{}} content={content} />
    </Div>
  );
};
