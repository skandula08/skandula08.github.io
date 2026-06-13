export default function starmapper() {
  return (
    <div className="writeup text-left w-5/6 m-auto text-lg">
      <h2>Illuminating the Night</h2>

      <p className="text-center italic">Sky Mapping Stars in Unity ARKit</p>

      <p>
        In the light pollution of the Boston city sky, it’s difficult to partake
        in one of my favorite pastimes, stargazing, without needing to travel a
        long way outside the city.
      </p>

      <p>
        We often use AR (augmented reality) interfaces to identify stellar
        objects during Astronomy Club telescope nights, but one of the most
        difficult aspects is mapping the real night sky to artificially enhanced
        simulations. I thought it would be an interesting project to create a
        portable planisphere application that could account for local light
        pollution levels.
      </p>

      <p>
        Essentially, if you were given the chance to pull away the layers of
        urbanization's imprint on the night sky, what would you see?
      </p>

      <h2>Why Unity?</h2>

      <p>
        The project uses the Unity game engine as its foundation. The user
        exists inside a spherical viewport representing the night sky. Players
        can increase or decrease simulated light pollution and weather
        conditions to observe how human activity impacts visibility.
      </p>

      <p>
        Additional features allow users to inspect light emission values and
        learn about notable constellations. Despite being known primarily as a
        game engine, Unity is an incredibly powerful platform for data
        visualization and remains surprisingly underutilized within astronomy
        research.
      </p>

      <p>
        While the final product is intended as an educational and exploratory
        tool, it also demonstrates how real-world scientific datasets can be
        incorporated into Unity applications.
      </p>

      <h2>Real Star Data → Unity Engine → Interactive Sky</h2>

      <p>
        We used the{" "}
        <a
          href="https://tdc-www.harvard.edu/catalogs/catalogsb.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          Harvard Revised Yale Bright Star Catalog
        </a>{" "}
        to extract real astronomical data.
      </p>

      <p>
        This dataset is distributed as a binary byte array and parsed using C#.
        After extracting the star records, trigonometric functions are used to
        convert celestial coordinates into positions on a 3D spherical sky map.
      </p>

      <p>
        This process allows over 9,000 stars to be accurately positioned and
        colored based on their real-world astronomical properties.
      </p>

      <h2>Features</h2>

      <ul className="list-disc pl-6">
        <li>Real-time star rendering</li>
        <li>Stars rendered as quads using an unlit shader</li>
        <li>Billboarded toward the camera using LookAt()</li>
        <li>Size and color derived from magnitude and spectral type</li>
        <li>Interactive constellation visualization</li>
        <li>Constellation visibility toggling</li>
        <li>Screen-aware rendering using ViewportPoint()</li>
        <li>LineRenderer constellation connections</li>
        <li>Automatic constellation label positioning</li>
        <li>Bortle Scale light-pollution simulation</li>
        <li>Brightness reduction in polluted skies</li>
        <li>Star size scaling based on sky quality</li>
        <li>Visibility thresholds for faint stars</li>
        <li>
          Adjustable brightnessFactor, sizeFactor, and visibilityThreshold
        </li>
      </ul>

      <h2>Data Structures</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-gray-700">
          <tbody>
            <tr>
              <td className="border border-gray-700 p-4 align-top">
                <h3 className="font-bold mb-2">Star.cs</h3>

                <ul className="list-disc pl-5">
                  <li>catalog_number</li>
                  <li>position (3D world space)</li>
                  <li>color (spectral type)</li>
                  <li>size (magnitude scaled)</li>
                </ul>

                <p className="mt-3">
                  Converts right ascension and declination into world-space
                  coordinates:
                </p>

                <pre className="mt-2 font-[var(--sans)] text-blue-100 bg-slate-900 p-3 rounded overflow-x-auto">
                  {`x = cos(RA) * cos(Dec)
y = sin(Dec)
z = sin(RA) * cos(Dec)`}
                </pre>
              </td>

              <td className="border border-gray-700 p-4 align-top">
                <h3 className="font-bold mb-2">Constellation.cs</h3>

                <ul className="list-disc pl-5">
                  <li>List&lt;List&lt;int&gt;&gt; starGroups</li>
                  <li>string name</li>
                </ul>

                <p className="mt-3">
                  Resources used for constellation grouping and validation:
                </p>

                <ul className="list-disc pl-5 mt-2">
                  <li>
                    <a
                      href="https://theskylive.com/sky/constellations"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      TheSkyLive Constellation Database
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://vizier.cfa.harvard.edu/viz-bin/VizieR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Harvard VizieR Catalog Service
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-8">
        <img
          src="/images/starmapper/starmapper_results.png"
          alt="Star Mapper Results"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
