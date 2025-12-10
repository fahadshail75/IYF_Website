import client from "@/lib/apollo-client";
import { GET_PRIVACY_POLICY } from "@/services/queries/privacy-policy";
import React from "react";

interface PageData {
    pageBy: {
      title: string;
      content: string;
    } | null;
  }

  
const PrivacyPolicyPage = async () => {
  const { data } = await client.query<PageData>({
    query: GET_PRIVACY_POLICY,
    fetchPolicy: "no-cache",
  });

  // TypeScript-safe access
  const page = data?.pageBy;

  if (!page) return <div>Page not found</div>;

  return (
    <div className="max-w-5xl px-5 md:px-10 lg:px-0 mx-auto mb-10 md:mb-20">
      <h1 className="text-5xl font-bold mb-10">{page.title}</h1>
      <div className="prose prose-lg mx-auto p-4 prose-h1:text-lg prose-h1:font-bold  prose-max-w-full" dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
};

export default PrivacyPolicyPage;
