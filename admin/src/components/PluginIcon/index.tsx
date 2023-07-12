/**
 *
 * PluginIcon
 *
 */

import React from "react";

export function SimpleIconsApollographql(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12c6.627 0 12-5.372 12-12a12.014 12.014 0 0 0-.473-3.343a.6.6 0 0 0-1.127.409h-.002c.265.943.402 1.928.402 2.934a10.73 10.73 0 0 1-3.163 7.637A10.729 10.729 0 0 1 12 22.8a10.73 10.73 0 0 1-7.637-3.163A10.728 10.728 0 0 1 1.2 12a10.73 10.73 0 0 1 3.163-7.637A10.728 10.728 0 0 1 12 1.2c2.576 0 5.013.896 6.958 2.54a1.466 1.466 0 1 0 .862-.84A11.953 11.953 0 0 0 12 0Zm-1.44 5.88l-4.2 10.902h2.63l.687-1.848h3.969l-.719-2.042h-2.613l1.7-4.691l3.024 8.58h2.631L13.47 5.88Z"></path></svg>
  );
}

const PluginIcon = () => <SimpleIconsApollographql style={{ marginTop: "2px" }} />;

export default PluginIcon;
