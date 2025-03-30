import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/add-to-cart-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SizeSelector from "@/components/size-selector";
import ProductGallery from "@/components/product-gallery";
import RelatedProducts from "@/components/related-products";
import { getAllProducts, getProductById } from "@/data/collections";

const productMapping = {
  "osl2ber-dropped-waist-parka": "sp1",
  "tactical-trousers": "sp2",
  "vapor-longsleeve": "sp3",
  "nighthawks-bomber-jacket": "sp4",
  "osl2ber-trapper-hat": "sp5",
  "nova-denim-jacket": "sp6",
  "portrait-double-breasted-blazer": "sp7",
  "anti-gaugin-faux-fur-blouson": "sp8",
};

const reverseMapping = {};
Object.keys(productMapping).forEach((key) => {
  reverseMapping[productMapping[key]] = key;
});

function getProductImage(productId) {
  try {
    const collectionId = productMapping[productId];
    if (!collectionId) return ["/placeholder.svg?height=800&width=600"];

    const collectionProduct = getAllProducts().find(
      (p) => p.id === collectionId
    );
    if (collectionProduct?.images?.length > 0) {
      return collectionProduct.images;
    }

    return ["/placeholder.svg?height=800&width=600"];
  } catch (error) {
    console.error("Error getting product image:", error);
    return ["/placeholder.svg?height=800&width=600"];
  }
}

function getCollectionProductName(productId) {
  try {
    const collectionId = productMapping[productId];
    if (!collectionId) return null;

    const collectionProduct = getAllProducts().find(
      (p) => p.id === collectionId
    );
    return collectionProduct?.name || null;
  } catch (error) {
    console.error("Error getting collection product name:", error);
    return null;
  }
}

const products = {
  "osl2ber-dropped-waist-parka": {
    id: "osl2ber-dropped-waist-parka",
    name: "OSL2BER DROPPED WAIST PARKA",
    price: 1300,
    description:
      "Long padded parka with a dropped waistline, featuring two front welt pockets, a zip through front closure with placket, and multiple flap bellows pockets on the lower front body, providing several storage options. Drawcord at the waist and hem allows for adjustment between bubble and straight fit styling options. Bungee elastic at the adjustable waist with an adjuster toggle system. Removable fake fur hood with adjustable drawcord and toggle. Quilted interior with padded interior lining.",
    images: getProductImage("osl2ber-dropped-waist-parka"),
    collection: "sans-papiers",
    sizes: ["46", "48", "50", "52", "54"],
    sizingChart: [
      {
        size: "46",
        chestWidth: "104.0",
        frontLength: "70.0",
        sleeveLength: "64.0",
      },
      {
        size: "48",
        chestWidth: "108.0",
        frontLength: "72.0",
        sleeveLength: "65.0",
      },
      {
        size: "50",
        chestWidth: "112.0",
        frontLength: "74.0",
        sleeveLength: "66.0",
      },
      {
        size: "52",
        chestWidth: "116.0",
        frontLength: "76.0",
        sleeveLength: "67.0",
      },
      {
        size: "54",
        chestWidth: "120.0",
        frontLength: "78.0",
        sleeveLength: "68.0",
      },
    ],
    features: [
      "Oversized fit",
      "Classic Periphery Studios logo embroidery on the front and utilitarian inspired style code information label on the sleeve",
      "Matte organic cotton and recycled polyester ripstop with paper-y touch",
      "Resistant, durable and water repellent",
    ],
    materials: {
      shell: "66%RECYCLED POLYESTER, 34%ORGANIC COTTON",
      lining: "100%COTTON",
      lining2: "100%VISCOSE",
    },
    care: [
      "do not wash",
      "do not bleach",
      "do not tumble dry",
      "do not iron",
      "dry cleaning with PCE",
    ],
    madeIn: "China",
    modelInfo: "The model is 186 cm tall and is wearing size 48.",
    relatedProducts: [
      "nighthawks-bomber-jacket",
      "osl2ber-trapper-hat",
      "vapor-longsleeve",
      "nova-denim-jacket",
      "portrait-double-breasted-blazer",
      "anti-gaugin-faux-fur-blouson",
    ],
    pairings: ["tactical-trousers"],
  },
  "tactical-trousers": {
    id: "tactical-trousers",
    name: "TACTICAL TROUSERS",
    price: 690,
    description:
      "Tactical trousers with multiple pockets and utility features. Designed for both style and functionality with reinforced knees and adjustable waistband.",
    images: getProductImage("tactical-trousers"),
    collection: "sans-papiers",
    sizes: ["46", "48", "50", "52", "54"],
    sizingChart: [
      {
        size: "46",
        chestWidth: "104.0",
        frontLength: "70.0",
        sleeveLength: "64.0",
      },
      {
        size: "48",
        chestWidth: "108.0",
        frontLength: "72.0",
        sleeveLength: "65.0",
      },
      {
        size: "50",
        chestWidth: "112.0",
        frontLength: "74.0",
        sleeveLength: "66.0",
      },
      {
        size: "52",
        chestWidth: "116.0",
        frontLength: "76.0",
        sleeveLength: "67.0",
      },
      {
        size: "54",
        chestWidth: "120.0",
        frontLength: "78.0",
        sleeveLength: "68.0",
      },
    ],
    features: [
      "Multiple utility pockets",
      "Reinforced knees",
      "Adjustable waistband",
      "Water-resistant finish",
    ],
    materials: {
      shell: "65% COTTON, 35% POLYAMIDE",
      lining: "100% COTTON",
    },
    care: [
      "machine wash cold",
      "do not bleach",
      "tumble dry low",
      "iron on low heat",
    ],
    madeIn: "Italy",
    modelInfo: "The model is 186 cm tall and is wearing size 48.",
    relatedProducts: ["osl2ber-dropped-waist-parka"],
    pairings: [],
  },
  "vapor-longsleeve": {
    id: "vapor-longsleeve",
    name: "VAPOR LONGSLEEVE",
    price: 170,
    description:
      "Lightweight longsleeve top made from premium materials. Features a relaxed fit and subtle branding detail on the chest.",
    images: getProductImage("vapor-longsleeve"),
    collection: "sans-papiers",
    sizes: ["XS", "S", "M", "L", "XL"],
    sizingChart: [
      {
        size: "XS",
        chestWidth: "96.0",
        frontLength: "65.0",
        sleeveLength: "60.0",
      },
      {
        size: "S",
        chestWidth: "100.0",
        frontLength: "67.0",
        sleeveLength: "61.0",
      },
      {
        size: "M",
        chestWidth: "104.0",
        frontLength: "69.0",
        sleeveLength: "62.0",
      },
      {
        size: "L",
        chestWidth: "108.0",
        frontLength: "71.0",
        sleeveLength: "63.0",
      },
      {
        size: "XL",
        chestWidth: "112.0",
        frontLength: "73.0",
        sleeveLength: "64.0",
      },
    ],
    features: [
      "Relaxed fit",
      "Subtle branding detail",
      "Premium cotton blend",
      "Ribbed cuffs",
    ],
    materials: {
      shell: "90% COTTON, 10% ELASTANE",
      lining: "",
    },
    care: [
      "machine wash cold",
      "do not bleach",
      "tumble dry low",
      "iron on low heat",
    ],
    madeIn: "Portugal",
    modelInfo: "The model is 186 cm tall and is wearing size M.",
    relatedProducts: ["portrait-double-breasted-blazer", "tactical-trousers"],
    pairings: [],
  },
  "nighthawks-bomber-jacket": {
    id: "nighthawks-bomber-jacket",
    name: "NIGHTHAWKS BOMBER JACKET",
    price: 790,
    description:
      "Premium bomber jacket with ribbed cuffs and collar. Features a classic silhouette with modern details.",
    images: getProductImage("nighthawks-bomber-jacket"),
    collection: "sans-papiers",
    sizes: ["46", "48", "50", "52", "54"],
    sizingChart: [
      {
        size: "46",
        chestWidth: "104.0",
        frontLength: "70.0",
        sleeveLength: "64.0",
      },
      {
        size: "48",
        chestWidth: "108.0",
        frontLength: "72.0",
        sleeveLength: "65.0",
      },
      {
        size: "50",
        chestWidth: "112.0",
        frontLength: "74.0",
        sleeveLength: "66.0",
      },
      {
        size: "52",
        chestWidth: "116.0",
        frontLength: "76.0",
        sleeveLength: "67.0",
      },
      {
        size: "54",
        chestWidth: "120.0",
        frontLength: "78.0",
        sleeveLength: "68.0",
      },
    ],
    features: [
      "Ribbed cuffs and collar",
      "Two-way zip closure",
      "Interior pocket",
      "Embroidered logo",
    ],
    materials: {
      shell: "100% POLYESTER",
      lining: "100% VISCOSE",
    },
    care: [
      "dry clean only",
      "do not bleach",
      "do not tumble dry",
      "do not iron",
    ],
    madeIn: "Italy",
    modelInfo: "The model is 186 cm tall and is wearing size 48.",
    relatedProducts: ["osl2ber-dropped-waist-parka", "tactical-trousers"],
    pairings: [],
  },
  "osl2ber-trapper-hat": {
    id: "osl2ber-trapper-hat",
    name: "OSL2BER TRAPPER HAT",
    price: 200,
    description:
      "Warm trapper hat with faux fur lining and ear flaps. Perfect for cold weather conditions.",
    images: getProductImage("osl2ber-trapper-hat"),
    collection: "sans-papiers",
    sizes: ["S", "M", "L"],
    sizingChart: [
      {
        size: "S",
        chestWidth: "56.0",
        frontLength: "24.0",
        sleeveLength: "0.0",
      },
      {
        size: "M",
        chestWidth: "58.0",
        frontLength: "25.0",
        sleeveLength: "0.0",
      },
      {
        size: "L",
        chestWidth: "60.0",
        frontLength: "26.0",
        sleeveLength: "0.0",
      },
    ],
    features: [
      "Faux fur lining",
      "Adjustable ear flaps",
      "Embroidered logo",
      "Water-resistant outer shell",
    ],
    materials: {
      shell: "100% POLYESTER",
      lining: "100% POLYESTER FAUX FUR",
    },
    care: [
      "spot clean only",
      "do not bleach",
      "do not tumble dry",
      "do not iron",
    ],
    madeIn: "China",
    modelInfo: "The model is wearing size M.",
    relatedProducts: ["osl2ber-dropped-waist-parka"],
    pairings: [],
  },
  "nova-denim-jacket": {
    id: "nova-denim-jacket",
    name: "NOVA DENIM JACKET",
    price: 480,
    description:
      "Classic denim jacket with a modern twist. Features a slightly oversized fit and premium denim construction.",
    images: getProductImage("nova-denim-jacket"),
    collection: "sans-papiers",
    sizes: ["XS", "S", "M", "L", "XL"],
    sizingChart: [
      {
        size: "XS",
        chestWidth: "100.0",
        frontLength: "65.0",
        sleeveLength: "60.0",
      },
      {
        size: "S",
        chestWidth: "104.0",
        frontLength: "67.0",
        sleeveLength: "61.0",
      },
      {
        size: "M",
        chestWidth: "108.0",
        frontLength: "69.0",
        sleeveLength: "62.0",
      },
      {
        size: "L",
        chestWidth: "112.0",
        frontLength: "71.0",
        sleeveLength: "63.0",
      },
      {
        size: "XL",
        chestWidth: "116.0",
        frontLength: "73.0",
        sleeveLength: "64.0",
      },
    ],
    features: [
      "Premium denim construction",
      "Slightly oversized fit",
      "Button closure",
      "Multiple pockets",
    ],
    materials: {
      shell: "100% COTTON",
      lining: "",
    },
    care: [
      "machine wash cold",
      "do not bleach",
      "tumble dry low",
      "iron on low heat",
    ],
    madeIn: "Japan",
    modelInfo: "The model is 186 cm tall and is wearing size M.",
    relatedProducts: ["tactical-trousers", "vapor-longsleeve"],
    pairings: [],
  },
  "portrait-double-breasted-blazer": {
    id: "portrait-double-breasted-blazer",
    name: "PORTRAIT DOUBLE BREASTED BLAZER",
    price: 890,
    description:
      "Elegant double-breasted blazer with premium tailoring. Features a structured silhouette and luxurious fabric.",
    images: getProductImage("portrait-double-breasted-blazer"),
    collection: "sans-papiers",
    sizes: ["46", "48", "50", "52", "54"],
    sizingChart: [
      {
        size: "46",
        chestWidth: "104.0",
        frontLength: "70.0",
        sleeveLength: "64.0",
      },
      {
        size: "48",
        chestWidth: "108.0",
        frontLength: "72.0",
        sleeveLength: "65.0",
      },
      {
        size: "50",
        chestWidth: "112.0",
        frontLength: "74.0",
        sleeveLength: "66.0",
      },
      {
        size: "52",
        chestWidth: "116.0",
        frontLength: "76.0",
        sleeveLength: "67.0",
      },
      {
        size: "54",
        chestWidth: "120.0",
        frontLength: "78.0",
        sleeveLength: "68.0",
      },
    ],
    features: [
      "Double-breasted design",
      "Premium tailoring",
      "Structured silhouette",
      "Interior pockets",
    ],
    materials: {
      shell: "80% WOOL, 20% POLYESTER",
      lining: "100% VISCOSE",
    },
    care: [
      "dry clean only",
      "do not bleach",
      "do not tumble dry",
      "do not iron",
    ],
    madeIn: "Italy",
    modelInfo: "The model is 186 cm tall and is wearing size 48.",
    relatedProducts: ["vapor-longsleeve", "tactical-trousers"],
    pairings: [],
  },
  "anti-gaugin-faux-fur-blouson": {
    id: "anti-gaugin-faux-fur-blouson",
    name: "ANTI-GAUGIN FAUX FUR BLOUSON",
    price: 890,
    description:
      "Luxurious faux fur blouson jacket with a relaxed fit. Features a soft texture and premium construction.",
    images: getProductImage("anti-gaugin-faux-fur-blouson"),
    collection: "sans-papiers",
    sizes: ["XS", "S", "M", "L", "XL"],
    sizingChart: [
      {
        size: "XS",
        chestWidth: "100.0",
        frontLength: "65.0",
        sleeveLength: "60.0",
      },
      {
        size: "S",
        chestWidth: "104.0",
        frontLength: "67.0",
        sleeveLength: "61.0",
      },
      {
        size: "M",
        chestWidth: "108.0",
        frontLength: "69.0",
        sleeveLength: "62.0",
      },
      {
        size: "L",
        chestWidth: "112.0",
        frontLength: "71.0",
        sleeveLength: "63.0",
      },
      {
        size: "XL",
        chestWidth: "116.0",
        frontLength: "73.0",
        sleeveLength: "64.0",
      },
    ],
    features: [
      "Premium faux fur construction",
      "Relaxed fit",
      "Hidden closure",
      "Side pockets",
    ],
    materials: {
      shell: "100% POLYESTER FAUX FUR",
      lining: "100% VISCOSE",
    },
    care: [
      "dry clean only",
      "do not bleach",
      "do not tumble dry",
      "do not iron",
    ],
    madeIn: "France",
    modelInfo: "The model is 186 cm tall and is wearing size M.",
    relatedProducts: ["osl2ber-dropped-waist-parka", "tactical-trousers"],
    pairings: [],
  },
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];

  if (!product) {
    const collectionProduct = getAllProducts().find(
      (p) => p.id === params.slug
    );
    if (collectionProduct) {
      const legacyProductId =
        reverseMapping[collectionProduct.id] ||
        Object.keys(productMapping).find(
          (key) => productMapping[key] === collectionProduct.id
        );

      if (legacyProductId) {
        return <ProductPage params={{ slug: legacyProductId }} />;
      }

      return (
        <div className="container mx-auto px-4 py-4 sm:py-8">
          <div className="mb-4">
            <Link
              href="/collections"
              className="text-sm text-gray-600 hover:text-black"
            >
              Back to Collections
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <ProductGallery images={collectionProduct.images} />

            {/* Product Info */}
            <div className="mt-4 lg:mt-0">
              <h1 className="text-xl sm:text-2xl font-bold mb-2">
                {collectionProduct.name}
              </h1>
              <p className="text-lg sm:text-xl mb-4 sm:mb-6">
                €{collectionProduct.price}
              </p>

              <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
                {collectionProduct.description ||
                  `Part of our ${collectionProduct.collection.replace(
                    "-",
                    " "
                  )} collection.`}
              </p>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-sm font-medium mb-2">Size</h3>
                <SizeSelector sizes={["S", "M", "L"]} />
              </div>

              <AddToCartButton product={collectionProduct} />
            </div>
          </div>
        </div>
      );
    }

    notFound();
  }

  const collectionProductName = getCollectionProductName(product.id);

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <div className="mb-4">
        <Link href="/store" className="text-sm text-gray-600 hover:text-black">
          Back to Store
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
        {/* Product Gallery */}
        <ProductGallery images={product.images} />

        {/* Product Info */}
        <div className="mt-4 lg:mt-0">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            {collectionProductName || product.name}
          </h1>
          <p className="text-lg sm:text-xl mb-4 sm:mb-6">€{product.price}</p>

          <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
            {product.description}
          </p>

          {/* Features List */}
          {product.features && product.features.length > 0 && (
            <ul className="mb-6 sm:mb-8 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-xs sm:text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* Size Selection */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-sm font-medium mb-2">Size</h3>
            <SizeSelector sizes={product.sizes || []} />
          </div>

          {/* Add to Cart Button */}
          <AddToCartButton product={product} />

          {/* Sizing Information */}
          <div className="mt-8 sm:mt-12">
            <Tabs defaultValue="sizing">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sizing">Sizing</TabsTrigger>
                <TabsTrigger value="materials">Materials & Care</TabsTrigger>
              </TabsList>

              <TabsContent value="sizing" className="pt-4">
                {product.sizingChart && product.sizingChart.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Size</th>
                          <th className="text-left py-2">Front Length (cm)</th>
                          <th className="text-left py-2">Chest Width (cm)</th>
                          <th className="text-left py-2">Sleeve Length (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.sizingChart.map((row) => (
                          <tr key={row.size} className="border-b">
                            <td className="py-2">{row.size}</td>
                            <td className="py-2">{row.frontLength}</td>
                            <td className="py-2">{row.chestWidth}</td>
                            <td className="py-2">{row.sleeveLength}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">
                    Sizing chart not available for this product.
                  </p>
                )}
              </TabsContent>

              <TabsContent value="materials" className="pt-4">
                <div className="space-y-4">
                  {product.materials && (
                    <div>
                      <h4 className="font-medium">Materials & Care</h4>
                      <p className="text-xs sm:text-sm mt-1">
                        {product.materials.shell && (
                          <>
                            SHELL: {product.materials.shell}
                            <br />
                          </>
                        )}
                        {product.materials.lining && (
                          <>
                            LINING: {product.materials.lining}
                            <br />
                          </>
                        )}
                        {product.materials.lining2 && (
                          <>LINING 2: {product.materials.lining2}</>
                        )}
                      </p>
                    </div>
                  )}

                  {product.madeIn && (
                    <div>
                      <h4 className="font-medium">Made in {product.madeIn}</h4>
                    </div>
                  )}

                  {product.care && product.care.length > 0 && (
                    <div>
                      <ul className="text-xs sm:text-sm space-y-1">
                        {product.care.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.modelInfo && (
                    <div>
                      <p className="text-xs sm:text-sm">{product.modelInfo}</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Pairings Section */}
      {product.pairings && product.pairings.length > 0 && (
        <div className="mb-8 sm:mb-16">
          <h2 className="text-lg sm:text-xl font-bold mb-6">Pairings</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {product.pairings.map((pairingId) => {
              const pairing = products[pairingId as keyof typeof products];
              if (!pairing) return null;

              const pairingCollectionName = getCollectionProductName(
                pairing.id
              );

              return (
                <Link
                  key={pairing.id}
                  href={`/products/${pairing.id}`}
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={pairing.images[0] || "/placeholder.svg"}
                      alt={pairingCollectionName || pairing.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-xs sm:text-sm font-medium">
                      {pairingCollectionName || pairing.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      €{pairing.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Related Products */}
      <RelatedProducts
        productIds={product.relatedProducts || []}
        products={products}
      />
    </div>
  );
}
