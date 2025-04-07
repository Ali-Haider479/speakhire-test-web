"use client";

import { Widget } from "@typeform/embed-react";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  // const searchParams = useSearchParams();
  const widgetContainerStyle = {
    width: "80vw",
    height: 700,
    margin: "20px auto",
  };

  return (
    <Widget
      id={id ? id.toString() : "dHWxc3pF"}
      style={widgetContainerStyle}
      medium="demo-test"
      hidden={{ foo: "foo value", bar: "bar value" }}
      transitiveSearchParams={["foo", "bar"]}
      iframeProps={{ title: "Foo Bar" }}
    />
  );
}
