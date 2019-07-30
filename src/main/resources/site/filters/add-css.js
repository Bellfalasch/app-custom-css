var libs = {
    portal: require('/lib/xp/portal'),
    util: require('/lib/util')
};

exports.responseFilter = function(req, res) {
    var siteConfig = libs.portal.getSiteConfig();
	 if (!siteConfig.deactivate && siteConfig["custom-css"]) {
	    res.pageContributions.headEnd = libs.util.data.forceArray(res.pageContributions.headEnd);
	    res.pageContributions.headEnd.push('<style type="text/css">' + siteConfig["custom-css"] + '</style>');
	 }
    return res;
};
