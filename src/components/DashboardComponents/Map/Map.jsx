import React, { useEffect, useRef, useState } from "react";
import GOOGLE_MAPS_KEY from "../constants/GoogleApiKey";
import { Autocomplete } from "@react-google-maps/api";

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";
};

const Map = () => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef;
  useEffect(() => {
    loadScript();
  }, []);
  return (
    <div className="search-location-input">
      <label htmlFor="">Type In Your Location</label>
      <input
        ref={autoCompleteRef}
        className="form-control"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        placeholder="Search Places..."
        value={query}
        type="text"
      />
    </div>
  );
};

export default Map;
