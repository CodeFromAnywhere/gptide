import { takeFirst } from "js-util";
import { MarkdownContent } from "markdown";
import { ALink } from "next-a-link";
import { Div } from "react-with-native";
import { useRouter } from "react-with-native-router";
export default () => {
  const router = useRouter();

  const info = `Please join [our Discord](https://discord.gg/gehCtKJk) and introduce yourself there to sign up and join the community. I won't charge you anything since we're still beta-testing, and I can give you FREE ACCESS to the Prompting IDE!`;

  const tier = router.query.tier ? takeFirst(router.query.tier) : undefined;
  return (
    <Div className="max-lg:mx-4 lg:mx-20">
      <MarkdownContent content={info} config={{}} />
      {/* {router.isReady ? (
        <FunctionForm
          tsFunction={FormIndex}
          initialValues={["", "", tier, "daily", "Hello there!"]}
        />
      ) : null} */}
      <ALink href="/offers">Not sure? Check the offers</ALink>
      <ALink href="/login">Admin login</ALink>
    </Div>
  );
};
