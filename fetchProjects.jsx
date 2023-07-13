import { useState, useEffect } from "react";
import { createClient } from "contentful";
//import { response } from "express";

const client = createClient({
  space: "ua5gmm8tr25y",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
  //accessToken: "U176SS616Vf0OrFrQFn4VZWmGupfDx1rzWrKO6WNIC0",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

//client
//.getEntries({ content_type: "projects" })
//.then((response) => console.log(response));

//client
//.getEntries({ content_type: "projects" })
//.then((response) => console.log(response.items))
//.catch(console.error);
