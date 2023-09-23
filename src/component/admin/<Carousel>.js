<Carousel>
  {imageArray.length === 0 ? (
    <div>
      {/* <img
src={data.cover_image}
alt={data.seo_tag + data.description}
/> */}
      <ProductImages
        src={productData.cover_image}
        className={"img-fluid"}
        alt={productData.seo_tag + productData.description}
      />
    </div>
  ) : (
    (filteredData || []).map((item, index) => {
      return (
        <div key={index}>
          {/* <img src={item} alt={data.seo_tag + data.description} /> */}
          <ProductImage
            src={item}
            className={"img-fluid"}
            alt={productData.seo_tag + productData.description}
          />
        </div>
      );
    })
  )}
</Carousel>;
