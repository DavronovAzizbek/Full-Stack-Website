/* eslint-disable react/no-unescaped-entities */
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import ProductsSlider from "../../components/ProductsSlider";
import ProductDetailsComponent from "../../components/ProductDetails";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>

            <Link
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
            >
              Cropped Satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-10 pl-10">
            <ProductDetailsComponent />
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-primary"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-primary"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-primary"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                eum exercitationem suscipit sed asperiores illo hic blanditiis
                saepe, vero accusantium ipsa qui, eos reiciendis odit facilis
                nesciunt debitis non atque veniam soluta, error quisquam dolore
                inventore quis? Velit, asperiores sapiente.
              </p>

              <h4>Lightweight Design</h4>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                deserunt similique id repellendus quia dolor aspernatur harum
                iure. Temporibus ad assumenda corporis. Illo, aut id. Eos
                aliquam pariatur quod fuga itaque impedit laboriosam autem cum
                voluptatum eum placeat nihil minus inventore, rem dolores quidem
                labore illum voluptas deleniti quae odio.
              </p>

              <h4>Free Shipping & Return</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                corrupti quas voluptate temporibus quam voluptatibus, eos
                perspiciatis distinctio quibusdam odit?
              </p>

              <h4>Money Back Guarantee</h4>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                velit eveniet doloremque numquam omnis id accusamus veritatis
                molestiae porro impedit?
              </p>

              <h4>Online Support</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum fuga, odio repudiandae modi dolorum rem vel! Quam nihil
                eveniet rem.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Stand Up
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Folded (w/o wheels)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Folded (w/ wheels)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Door Pass Through
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-white dark:border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        35"L x 24"W x 37-45"H (front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-white dark:border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        35"L x 24"W x 37-45"H (front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-white dark:border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        35"L x 24"W x 37-45"H (front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-white dark:border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        35"L x 24"W x 37-45"H (front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-white dark:border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        35"L x 24"W x 37-45"H (front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-white dark:border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        35"L x 24"W x 37-45"H (front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer questions & answers</h2>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2025-03-18</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Laborum esse error eveniet vel inventore
                          expedita, saepe laudantium, ex, non vero dolores
                          fugiat atque? Hic molestiae maxime, aut accusamus
                          voluptas ratione!
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2025-03-18</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Laborum esse error eveniet vel inventore
                          expedita, saepe laudantium, ex, non vero dolores
                          fugiat atque? Hic molestiae maxime, aut accusamus
                          voluptas ratione!
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2025-03-18</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Laborum esse error eveniet vel inventore
                          expedita, saepe laudantium, ex, non vero dolores
                          fugiat atque? Hic molestiae maxime, aut accusamus
                          voluptas ratione!
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2025-03-18</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Laborum esse error eveniet vel inventore
                          expedita, saepe laudantium, ex, non vero dolores
                          fugiat atque? Hic molestiae maxime, aut accusamus
                          voluptas ratione!
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2025-03-18</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Laborum esse error eveniet vel inventore
                          expedita, saepe laudantium, ex, non vero dolores
                          fugiat atque? Hic molestiae maxime, aut accusamus
                          voluptas ratione!
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>

                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      className="w-full"
                      multiline
                      rows={5}
                    />

                    <br />
                    <br />
                    <Rating name="size-small" defaultValue={4} />

                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-8">
          <h2 className="text-[20px] font-[600] pb-0">Related Products</h2>
          <ProductsSlider items={6} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
