import React from 'react';
import app from '../../../app';
import { useHistory } from "react-router-dom";
import { TokenDetails } from '../../../models';
import { observer } from 'mobx-react';
import { getOwnerAddressFromTokenId, getCreatorAddressFromTokenId } from '../../../utils/helpers/xdc3';

interface DisplayCardInterface {
  nft: TokenDetails
}

export const DisplayCard = observer((props: DisplayCardInterface): JSX.Element => {
  const history = useHistory();

  const handleNFTClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    app.nft.setActiveNFT(props.nft);
    history.push('item-details');
  };

  const getPriceText = () => {
    const priceText = `${props.nft.status?.getDisplayFormattedPrice()} XDC`;
    return props.nft.status?.isForSale ? ` For Sale ${priceText}` : ' Not For Sale';
  };


  const getOwnerPriceText = () => {
    return props.nft.status?.userIsOwner ? `Owned ${getPriceText()}` : getPriceText();
  };

  const getImage = () => {
    return props.nft.fileHash?.length > 0 ? <img src={props.nft.getNFTFileURL(app.vars.baseURI)} alt="..." className="img-fluid" /> : "No Image Minted";
  };

  React.useEffect(() => {
    getOwnerAddressFromTokenId(props.nft.tokenId).then((ownerResult => {
      props.nft.ownerAddress = ownerResult;
    }));

    getCreatorAddressFromTokenId(props.nft.tokenId).then((creatorResult => {
      props.nft.creatorAddress = creatorResult;
    }));


  }, []);

  return (
    <>
      <div className="col-xl-3 col-md-4 mb-xl-0">
        <div className="card card-XFNT card-plain" onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleNFTClicked(e)}>
          <div className="creator">Creator: {app.vars.truncateAddress(props.nft.creatorAddress)}</div>
          <div className="position-relative">
            <a className="d-block img-container" href="/item-details">
              {getImage()}
            </a>
          </div>
          <div className="item-cont card-body px-1 pb-0">
            <div className="row">
              <div className="col-xl-12">
                {/*                     <p className="text-gradient text-dark mb-2 text-sm">1 Of 1 In Stock</p> */}
                <a href="item-details">
                  <h5>
                    {props.nft?.title}
                  </h5>
                </a>
                <p className="mb-3 text-sm">
                  Price : <span className="gradient-text">{getOwnerPriceText()}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

});

export default DisplayCard;
