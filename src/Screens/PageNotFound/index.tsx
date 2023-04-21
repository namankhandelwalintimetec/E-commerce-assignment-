import { PageNotFoundTag } from "./Style";

const PageNotFound=()=>{
	return (
    <PageNotFoundTag>
      <div id="main" data-testid="pagenotfound">
        <div className="fof">
          <h1>Error 404</h1>
        </div>
      </div>
    </PageNotFoundTag>
  );
}

export default PageNotFound;