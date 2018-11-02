var libs = {
    portal: require('/lib/xp/portal'),
    util: require('/lib/enonic/util')
};

exports.responseFilter = function(req, res) {
    var siteConfig = libs.portal.getSiteConfig();
	 if (!siteConfig.deactivate) {
	    res.pageContributions.headEnd = libs.util.data.forceArray(res.pageContributions.headEnd);
	    res.pageContributions.headEnd.push("<style>" + siteConfig.customcss + "</style>");
	 }
    return res;
};
