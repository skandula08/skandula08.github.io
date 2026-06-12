## Illuminating the Night: 

<p style="text-align: center;"><i>Sky Mapping Stars in Unity ARKit</i></p>

In the light pollution of the Boston city sky, it’s difficult to partake in one of my favorite pastimes, stargazing, without needing to travel a long ways out of the city.
We like to use AR (augmented reality) interfaces to identify stellar objects when the Astronomy Club goes outside for telescope nights, but difficult part is mapping a dark sky to the artificially enhanced simulations. I figured, an interesting project would be to create a portable planosphere program that you could take into account the pollution levels. Essentially If you were given the chance to pull away the layers of urbanization’s imprint on the night sky, what would you see?

## Why Unity
The main projects uses Unity3d game engine as the base. The viewport will reside within a sphere that represents the night sky. The player will have a way to increase and decrease light emissions and weather phenomena to view how the night sky can change due to the influence of human activity. There will also be a feature to view the values of light emissions and interesting information about the constellations we are focusing on. 
Unity Engine, despite being a game engine, is an incredibly powerful tool for data visualization and I believe is rather underexplored for the world of Astronomy research. Of course this end product of this project is primarily a tool to use, the implementation of real world data is underrepresented in Unity development.



## Real Star Data > Unity Engine > Interactive Sky
<br />
We used the <a style="text-decoration: underline;" href="https://tdc-www.harvard.edu/catalogs/catalogsb.html"><b>Harvard Revised Yale Bright Star Catalog</b></a> to extract real life astronomical data.
This data is initailly a binary byte array that is parsed in c#. Upon extracting the data points, we can manipulate the valuse with simple trigonometric functions to map and recolor 9000+ stars onto a 3D spherical plane
<br />
<br />

## Features
- Star Rendering
- Stars as quads with unlit shader.
- Faces the camera (LookAt) for 2D appearance in 3D space.
- Size & color based on magnitude and spectral type.
- Constellations
- Toggle with constellationToggle.
- Visibility determined by screen presence (ViewportPoint).
- Lines drawn with LineRenderer.
- Labels positioned at center of stars in constellation.
- Bortle Scale Simulation
- Dim stars in bright skies.
- Shrink stars based on light pollution.
- Hide faint stars above threshold.
- brightnessFactor, sizeFactor, visibilityThreshold controlled by bortleScale.

<br />
<br />

Star.cs <br /> catalog_number <br /> position (3D world space) <br /> color (based on spectral type) <br /> size (scaled from magnitude) <br /> Converts right ascension & declination to 3D positions. <br /> x = cos(RA) * cos(Dec); y = sin(Dec); <br /> z = sin(RA) * cos(Dec); | Constellation.cs  <br /> List<List<int>> starGroups; string name;  <br /> Resources for evaluating Stars into constellation clusters and line groups:  <br /> https://theskylive.com/sk y/constellations/ <br/>https://vizier.cfa.harvard.e du/viz-bin/VizieR |
|---|---|

<br />
<br />
<img src="/assets/starmapper/starmapper_results.png" />