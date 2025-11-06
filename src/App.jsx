import React, { useState } from 'react';
import { Search, BookOpen, Grid, List, X, ChevronRight, Maximize2, GraduationCap } from 'lucide-react';

const VisualGlossary = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedConcept, setSelectedConcept] = useState(null);

  // Complete glossary data with descriptions - 7 CHAPTERS
  const glossaryData = {
    "Statistics": {
      color: "bg-blue-500",
      icon: "📊",
      concepts: [
        {
          name: "Mean",
          image: "Mean.jpeg",
          description: "The arithmetic average of a set of numbers, calculated by adding all values and dividing by the count. It represents the central tendency of data and is commonly used in everyday statistics."
        },
        {
          name: "Median",
          image: "Median.jpeg",
          description: "The middle value in a data set when arranged in ascending or descending order. It divides the data into two equal halves and is less affected by outliers than the mean, making it useful for skewed distributions."
        },
        {
          name: "Mode",
          image: "Mode.jpeg",
          description: "The value that appears most frequently in a data set. A dataset can have one mode (unimodal), multiple modes (bimodal or multimodal), or no mode at all if all values occur with equal frequency."
        }
      ]
    },
    "Circles": {
      color: "bg-purple-500",
      icon: "⭕",
      concepts: [
        {
          name: "Sector",
          image: "Sector.jpeg",
          description: "The region bounded by two radii and the arc between them. Like a slice of pizza, it's a portion of the circle's area. The area of a sector depends on the central angle it subtends."
        },
        {
          name: "Chord, Diameter, Radius",
          image: "Chord, Diameter, Radius.jpeg",
          description: "Chord: A line segment connecting two points on a circle. Diameter: The longest chord that passes through the center, equal to twice the radius. Radius: The distance from the center to any point on the circle."
        },
        {
          name: "Segment",
          image: "Segment.jpeg",
          description: "The region between a chord and the arc it cuts off from the circle. There are two segments created by any chord: the minor segment (smaller area) and the major segment (larger area)."
        },
        {
          name: "Tangent",
          image: "Tangent.jpeg",
          description: "A line that touches the circle at exactly one point, called the point of tangency. It's always perpendicular to the radius drawn to the point of contact. A tangent from an external point has equal length to both tangent lines from that point."
        },
        {
          name: "Concentric",
          image: "Concentric.jpeg",
          description: "Circles that share the same center point but have different radii. They create ring-like patterns and are commonly seen in targets, ripples in water, and tree rings. The space between concentric circles forms an annulus."
        }
      ]
    },
    "Sequence and Series": {
      color: "bg-green-500",
      icon: "🔢",
      concepts: [
        {
          name: "AP",
          image: "AP.jpeg",
          description: "Arithmetic Progression (AP) is a sequence where each term is obtained by adding a constant value called the common difference (d) to the previous term. Example: 2, 5, 8, 11, 14... has d=3. The nth term formula is: aₙ = a₁ + (n-1)d"
        },
        {
          name: "GP",
          image: "GP.jpeg",
          description: "Geometric Progression (GP) is a sequence where each term is obtained by multiplying the previous term by a constant value called the common ratio (r). Example: 2, 6, 18, 54... has r=3. The nth term formula is: aₙ = a₁ × r^(n-1)"
        }
      ]
    },
    "Surface Area and Volume": {
      color: "bg-orange-500",
      icon: "📦",
      concepts: [
        {
          name: "Sphere",
          image: "Sphere.jpeg",
          description: "A perfectly round three-dimensional object where every point on the surface is equidistant from the center. Surface Area = 4πr², Volume = (4/3)πr³. Examples include balls, planets, and bubbles."
        },
        {
          name: "Pyramid",
          image: "Pyramid.jpeg",
          description: "A three-dimensional shape with a polygon base and triangular faces that meet at a single point called the apex. Volume = (1/3) × Base Area × Height. The ancient Egyptian pyramids are famous examples."
        },
        {
          name: "Cone",
          image: "Cone.jpeg",
          description: "A three-dimensional shape with a circular base that tapers smoothly to a point (apex). Volume = (1/3)πr²h, Curved Surface Area = πrl (where l is slant height, l² = r² + h²). Ice cream cones and traffic cones are common examples."
        },
        {
          name: "Cube",
          image: "Cube.jpeg",
          description: "A three-dimensional shape with 6 equal square faces, 12 edges of equal length, and 8 vertices. All angles are right angles. Surface Area = 6a², Volume = a³ (where a is the edge length). Dice and Rubik's cubes are examples."
        },
        {
          name: "Cylinder",
          image: "Cylinder.jpeg",
          description: "A three-dimensional shape with two parallel circular bases of equal size connected by a curved surface. Volume = πr²h, Curved Surface Area = 2πrh, Total Surface Area = 2πr(r + h). Cans and pipes are cylindrical."
        }
      ]
    },
    "Polynomials": {
      color: "bg-red-500",
      icon: "∑",
      concepts: [
        {
          name: "Polynomial Inequality",
          image: "PolynomialInequality.jpeg",
          description: "An inequality involving polynomial expressions, such as p(x) > 0, p(x) < 0, p(x) ≥ 0, or p(x) ≤ 0. Used to find ranges of values (intervals) that satisfy the given condition. Solving involves finding critical points and testing intervals."
        },
        {
          name: "Location of Roots",
          image: "LocationOfRoots.jpeg",
          description: "The positions where a polynomial function crosses or touches the x-axis on a graph. These are the values where p(x) = 0, also called zeros, solutions, or roots. The location and nature of roots determine the shape of the polynomial graph."
        },
        {
          name: "Cubic",
          image: "Cubic.jpeg",
          description: "A polynomial of degree 3, where the highest power of x is 3. General form: ax³ + bx² + cx + d (where a ≠ 0). It can have up to 3 real roots and its graph has an S-shape with one or two turning points."
        },
        {
          name: "Quadratic",
          image: "Quadratic.jpeg",
          description: "A polynomial of degree 2, where the highest power of x is 2. General form: ax² + bx + c (where a ≠ 0). Its graph is a parabola (U-shaped curve). Can have 0, 1, or 2 real roots depending on the discriminant (b² - 4ac)."
        },
        {
          name: "Linear",
          image: "Linear.jpeg",
          description: "A polynomial of degree 1, where the highest power of x is 1. General form: ax + b (where a ≠ 0). Its graph is a straight line with constant slope 'a'. Every linear equation has exactly one real root: x = -b/a."
        }
      ]
    },
    "Real Numbers": {
      color: "bg-teal-500",
      icon: "ℝ",
      concepts: [
        {
          name: "Rational and Irrational",
          image: "Rational_Irrational.jpeg",
          description: "Rational numbers can be expressed as a fraction p/q where p and q are integers and q ≠ 0. They have terminating or repeating decimal expansions (e.g., 1/2 = 0.5, 1/3 = 0.333...). Irrational numbers cannot be expressed as fractions and have non-repeating, non-terminating decimals (e.g., π = 3.14159..., √2 = 1.41421...)."
        },
        {
          name: "Number Line",
          image: "Number Line.jpeg",
          description: "A visual representation of real numbers as points on an infinite straight line. Zero is at the center, positive numbers extend to the right, and negative numbers to the left. It helps visualize number ordering, distance between numbers, and operations like addition and subtraction."
        }
      ]
    },
    "Triangles": {
      color: "bg-pink-500",
      icon: "△",
      concepts: [
        {
          name: "Incenter",
          image: "Incenter.jpeg",
          description: "The point where all three angle bisectors of a triangle meet (concurrent point). It's the center of the inscribed circle (incircle) that touches all three sides of the triangle. The incenter is always located inside the triangle and is equidistant from all three sides."
        },
        {
          name: "Orthocenter",
          image: "Orthocenter.jpeg",
          description: "The point where all three altitudes of a triangle intersect. An altitude is a perpendicular line from a vertex to the opposite side. The orthocenter's location varies: inside for acute triangles, at the right-angle vertex for right triangles, and outside for obtuse triangles."
        },
        {
          name: "Centroid",
          image: "Centroid.jpeg",
          description: "The point where all three medians of a triangle intersect. A median connects a vertex to the midpoint of the opposite side. The centroid is the center of mass or balance point of the triangle and divides each median in a 2:1 ratio (2 parts toward the vertex, 1 part toward the midpoint)."
        },
        {
          name: "Type",
          image: "Type.jpeg",
          description: "Triangles are classified by sides: Equilateral (3 equal sides, all angles 60°), Isosceles (2 equal sides, 2 equal angles), Scalene (no equal sides or angles). By angles: Acute (all angles < 90°), Right (one 90° angle), Obtuse (one angle > 90°). These properties affect the triangle's shape and symmetry."
        },
        {
          name: "Similar",
          image: "Similar.jpeg",
          description: "Triangles that have the same shape but different sizes. All corresponding angles are equal, and corresponding sides are proportional (in the same ratio). Similarity is used in scale drawings, maps, indirect measurement, and proves many geometric theorems. Symbol: △ABC ~ △DEF"
        },
        {
          name: "Congruent",
          image: "Congruent.jpeg",
          description: "Triangles that are identical in both shape and size. All corresponding sides and angles are exactly equal. Congruence can be proven using criteria: SSS (Side-Side-Side), SAS (Side-Angle-Side), ASA (Angle-Side-Angle), AAS (Angle-Angle-Side), and RHS (Right angle-Hypotenuse-Side). Symbol: △ABC ≅ △DEF"
        }
      ]
    }
  };

  const allConcepts = Object.entries(glossaryData).flatMap(([chapter, data]) =>
    data.concepts.map(concept => ({ ...concept, chapter, color: data.color }))
  );

  const filteredConcepts = selectedChapter
    ? glossaryData[selectedChapter].concepts
    : allConcepts.filter(concept =>
        concept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (concept.chapter && concept.chapter.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  const getImageUrl = (chapter, imageName) => {
    return `https://raw.githubusercontent.com/PP-2412/VisualGlossary/main/${encodeURIComponent(chapter)}/${encodeURIComponent(imageName)}`;
  };

  const totalConcepts = Object.values(glossaryData).reduce((sum, chapter) => sum + chapter.concepts.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-10 h-10 text-indigo-600" />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Visual Glossary
                </h1>
                <p className="text-sm text-gray-600">Dual Coding Learning • {totalConcepts} Concepts • 7 Chapters</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-400 hover:bg-gray-100'}`}
                title="Grid View"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-400 hover:bg-gray-100'}`}
                title="List View"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search concepts, descriptions, or chapters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Chapter Filter Pills */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Filter by Chapter</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedChapter(null)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                !selectedChapter
                  ? 'bg-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              All Concepts ({totalConcepts})
            </button>
            {Object.entries(glossaryData).map(([chapter, data]) => (
              <button
                key={chapter}
                onClick={() => setSelectedChapter(chapter)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedChapter === chapter
                    ? `${data.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                <span>{data.icon}</span>
                {chapter} ({data.concepts.length})
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-indigo-600">{filteredConcepts.length}</span> concept{filteredConcepts.length !== 1 ? 's' : ''}
            {selectedChapter && <span> from <span className="font-semibold">{selectedChapter}</span></span>}
            {searchTerm && <span> matching "<span className="font-semibold">{searchTerm}</span>"</span>}
          </p>
        </div>

        {/* Concepts Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConcepts.map((concept, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedConcept(concept)}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group border border-gray-100"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-video">
                  <img
                    src={getImageUrl(concept.chapter || selectedChapter, concept.image)}
                    alt={concept.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="18" font-family="Arial"%3E' + encodeURIComponent(concept.name) + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-indigo-600" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{concept.name}</h3>
                    {concept.chapter && (
                      <span className={`text-xs px-2 py-1 rounded-full text-white ${glossaryData[concept.chapter].color}`}>
                        {glossaryData[concept.chapter].icon}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {concept.description}
                  </p>
                  <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium">
                    Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredConcepts.map((concept, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedConcept(concept)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex items-center gap-6 p-6 group border border-gray-100"
              >
                <div className="flex-shrink-0 w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={getImageUrl(concept.chapter || selectedChapter, concept.image)}
                    alt={concept.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f3f4f6" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="14" font-family="Arial"%3E' + encodeURIComponent(concept.name) + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{concept.name}</h3>
                    {concept.chapter && (
                      <span className={`text-sm px-3 py-1 rounded-full text-white ${glossaryData[concept.chapter].color}`}>
                        {concept.chapter}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {concept.description}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            ))}
          </div>
        )}

        {filteredConcepts.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No concepts found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedChapter(null);
              }}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Detailed View Modal */}
      {selectedConcept && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedConcept(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-3xl z-10">
              <div className="flex items-center gap-3">
                {selectedConcept.chapter && (
                  <span className={`text-2xl ${glossaryData[selectedConcept.chapter].color} px-3 py-1 rounded-full text-white`}>
                    {glossaryData[selectedConcept.chapter].icon}
                  </span>
                )}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedConcept.name}</h2>
                  {selectedConcept.chapter && (
                    <p className="text-sm text-gray-600">{selectedConcept.chapter}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedConcept(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Close"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
                <img
                  src={getImageUrl(selectedConcept.chapter, selectedConcept.image)}
                  alt={selectedConcept.name}
                  className="w-full max-h-96 object-contain rounded-xl"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23f3f4f6" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="Arial"%3E' + encodeURIComponent(selectedConcept.name) + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                  Concept Description
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedConcept.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">Visual Glossary</span> • Dual Coding Theory in Action
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Combining visual and verbal information for better learning retention
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VisualGlossary;
