const maximumRequests = ( n, req ) => search( req, 0, BigInt(0), 0 )

const search = ( req, i, t, count ) => 
    i === req.length
    ? 0 == t ? count : 0
    : Math.max(
        search( req, i + 1, t, count ),
        search( req, i + 1, t + c( req[i][0] ) - c( req[i][1] ), count + 1 )
    )

const c = x => BigInt( 16 ** x )